const pool = require('../config/db');

// Mark a question as solved
exports.markQuestionSolved = async (req, res) => {
    const { studentId, questionId } = req.body;

    try {
        const check = await pool.query(
            'SELECT * FROM student_progress WHERE student_id = $1 AND question_id = $2',
            [studentId, questionId]
        );

        if (check.rows.length > 0) {
            return res.status(200).json({ message: 'Already marked as solved' });
        }

        // Streak Logic
        const studentRes = await pool.query('SELECT current_streak, last_solved_date FROM students WHERE id = $1', [studentId]);
        const student = studentRes.rows[0];

        let newStreak = student.current_streak || 0;
        const lastDate = student.last_solved_date ? new Date(student.last_solved_date) : null;
        const now = new Date(); // Server time (UTC usually in hosted envs, local here)

        // Normalize to date string YYYY-MM-DD to compare days ignoring time
        const todayStr = now.toISOString().split('T')[0];
        const lastDateStr = lastDate ? lastDate.toISOString().split('T')[0] : null;

        if (lastDateStr !== todayStr) {
            if (lastDateStr) {
                // Check if yesterday
                const yesterday = new Date(now);
                yesterday.setDate(now.getDate() - 1);
                const yesterdayStr = yesterday.toISOString().split('T')[0];

                if (lastDateStr === yesterdayStr) {
                    newStreak++;
                } else {
                    newStreak = 1; // Reset if missed a day
                }
            } else {
                newStreak = 1; // First solve ever
            }
        }
        // If todayStr == lastDateStr, streak remains same (already increments once today)

        await pool.query(
            'UPDATE students SET current_streak = $1, last_solved_date = $2 WHERE id = $3',
            [newStreak, now, studentId]
        );

        await pool.query(
            'INSERT INTO student_progress (student_id, question_id) VALUES ($1, $2)',
            [studentId, questionId]
        );

        res.status(201).json({ message: 'Question marked as solved', streak: newStreak });
    } catch (err) {
        console.error('Error marking question solved:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};



// --- C++ Course Progress ---

exports.markCppLessonCompleted = async (req, res) => {
    const { studentId, lessonId } = req.body;

    try {
        // Check if already completed
        const checkRes = await pool.query(
            'SELECT * FROM student_cpp_progress WHERE student_id = $1 AND lesson_id = $2',
            [studentId, lessonId]
        );

        if (checkRes.rows.length > 0) {
            return res.status(200).json({ message: 'Lesson already completed' });
        }

        // Insert progress
        await pool.query(
            'INSERT INTO student_cpp_progress (student_id, lesson_id) VALUES ($1, $2)',
            [studentId, lessonId]
        );

        res.status(201).json({ message: 'Lesson marked as completed' });
    } catch (err) {
        console.error('Error marking C++ lesson:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getCppProgress = async (req, res) => {
    const { studentId } = req.params;

    try {
        const result = await pool.query(
            'SELECT lesson_id, completed_at FROM student_cpp_progress WHERE student_id = $1',
            [studentId]
        );

        // Convert to map for easier frontend consumption
        const progressMap = {};
        result.rows.forEach(row => {
            progressMap[row.lesson_id] = true;
        });

        res.json(progressMap);
    } catch (err) {
        console.error('Error fetching C++ progress:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// --- Combined Profile Stats ---

exports.getUserProfileStats = async (req, res) => {
    const { studentId } = req.params;

    try {
        // DSA Stats
        const dsaSolvedRes = await pool.query('SELECT COUNT(*) FROM student_progress WHERE student_id = $1', [studentId]);
        const dsaSolvedCount = parseInt(dsaSolvedRes.rows[0].count);

        // C++ Stats
        const cppSolvedRes = await pool.query('SELECT COUNT(*) FROM student_cpp_progress WHERE student_id = $1', [studentId]);
        const cppSolvedCount = parseInt(cppSolvedRes.rows[0].count);

        // User Details
        const userRes = await pool.query('SELECT name, email, current_streak, last_solved_date, created_at FROM students WHERE id = $1', [studentId]);
        const user = userRes.rows[0];

        // Activity Dates - Get all solved dates for heatmap
        const activityRes = await pool.query(
            `SELECT DATE(solved_at) as date, COUNT(*) as count 
             FROM student_progress 
             WHERE student_id = $1 
             GROUP BY DATE(solved_at)
             ORDER BY date`,
            [studentId]
        );

        // Also get C++ activity
        const cppActivityRes = await pool.query(
            `SELECT DATE(completed_at) as date, COUNT(*) as count 
             FROM student_cpp_progress 
             WHERE student_id = $1 
             GROUP BY DATE(completed_at)
             ORDER BY date`,
            [studentId]
        );

        // Combine activities into a map
        const activityMap = {};
        activityRes.rows.forEach(row => {
            const dateStr = row.date.toISOString().split('T')[0];
            activityMap[dateStr] = (activityMap[dateStr] || 0) + parseInt(row.count);
        });
        cppActivityRes.rows.forEach(row => {
            const dateStr = row.date.toISOString().split('T')[0];
            activityMap[dateStr] = (activityMap[dateStr] || 0) + parseInt(row.count);
        });

        res.json({
            user,
            stats: {
                dsaSolved: dsaSolvedCount,
                cppCompleted: cppSolvedCount,
                totalSolved: dsaSolvedCount + cppSolvedCount
            },
            activityMap // Date -> count mapping
        });

    } catch (err) {
        console.error('Error fetching profile stats:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get all solved questions for a student
exports.getSolvedQuestions = async (req, res) => {
    const studentId = req.params.studentId;

    try {
        const result = await pool.query(
            'SELECT question_id, completed_at FROM student_progress WHERE student_id = $1',
            [studentId]
        );
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching progress:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get Student Stats
exports.getStudentStats = async (req, res) => {
    const studentId = req.params.studentId;
    try {
        const result = await pool.query('SELECT current_streak FROM students WHERE id = $1', [studentId]);
        if (result.rows.length === 0) return res.status(404).json({ message: 'Student not found' });

        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error fetching stats:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};
