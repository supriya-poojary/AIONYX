const express = require('express');
const router = express.Router();
const db = require('../config/db');

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and message are required'
            });
        }

        // Insert into database
        const query = `
            INSERT INTO contact_messages (name, email, phone, subject, message, created_at)
            VALUES (?, ?, ?, ?, ?, NOW())
        `;

        await db.query(query, [
            name,
            email,
            phone || null,
            subject || 'General Inquiry',
            message
        ]);

        res.status(200).json({
            success: true,
            message: 'Thank you for contacting us! We will get back to you within 24 hours.'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later.'
        });
    }
});

module.exports = router;
