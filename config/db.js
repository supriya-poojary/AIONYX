const { Pool } = require("pg");

// Create PostgreSQL connection pool with hardcoded Neon credentials
const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:npg_5utiYfIQ8Hyg@ep-gentle-bonus-ahh659m3-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
    ssl: {
        rejectUnauthorized: false, // required for Neon
    },
});

// Test connection once
pool.query("SELECT 1")
    .then(() => console.log("✅ Connected to Neon PostgreSQL"))
    .catch(err => console.error("❌ Neon DB connection error:", err));

module.exports = {
    query: async (text, params = []) => {
        try {
            const result = await pool.query(text, params);
            return {
                rows: result.rows || [],
                rowCount: result.rowCount || 0,
            };
        } catch (err) {
            console.error("DB Query Error:", err);
            throw err;
        }
    }
};
