const pool = require('./config/db');

async function checkSchema() {
    try {
        const res = await pool.query(`
            SELECT column_name
            FROM information_schema.columns 
            WHERE table_name = 'student_cpp_progress';
        `);
        console.log("COLUMNS START");
        res.rows.forEach(row => console.log(row.column_name));
        console.log("COLUMNS END");

    } catch (err) {
        console.error(err);
    }
}

checkSchema();
