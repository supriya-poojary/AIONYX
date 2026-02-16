const pool = require('./config/db');
const fs = require('fs');
const path = require('path');

async function runMigration() {
    try {
        const sql = fs.readFileSync(path.join(__dirname, 'migrations', 'create_python_progress.sql'), 'utf8');
        console.log("Running Python migration...");
        await pool.query(sql);
        console.log("✅ Migration successful: student_python_progress table created.");
    } catch (err) {
        console.error("❌ Migration failed:", err);
    }
}

runMigration();
