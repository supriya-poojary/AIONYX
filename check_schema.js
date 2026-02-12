const pool = require('./config/db');

async function checkSchema() {
    try {
        const res = await pool.query(`
            SELECT column_name, data_type 
            FROM information_schema.columns 
            WHERE table_name = 'student_progress';
        `);
        console.log("Schema for student_progress:", res.rows);

        const res2 = await pool.query(`
            SELECT column_name, data_type 
            FROM information_schema.columns 
            WHERE table_name = 'students';
        `);
        console.log("Schema for students:", res2.rows);

    } catch (err) {
        console.error(err);
    }
}

checkSchema();
