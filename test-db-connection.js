const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

const fs = require('fs');

async function testConnection() {
    try {
        console.log('Connecting to Neon PostgreSQL...');
        const res = await pool.query('SELECT NOW()');
        const message = `✅ Connection successful!\nCurrent time from DB: ${res.rows[0].now}`;
        console.log(message);
        fs.writeFileSync('conn_test_result.txt', message);
    } catch (err) {
        const message = `❌ Connection failed: ${err.message}`;
        console.error(message);
        fs.writeFileSync('conn_test_result.txt', message);
        process.exit(1);
    } finally {
        await pool.end();
    }
}

testConnection();
