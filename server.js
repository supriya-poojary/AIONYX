const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(compression()); // Compress all responses
app.use(express.json());
app.use(cors());

// Serve static files with caching
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '0', // Disable caching for development
    etag: false
}));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/content', require('./routes/contentRoutes'));
app.use('/api/progress', require('./routes/progressRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/compiler', require('./routes/compilerRoutes'));

// Serve Frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/courses', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'courses.html'));
});

app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'privacy-policy.html'));
});

app.get('/student-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'student-login.html'));
});

app.get('/student-signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'student-signup.html'));
});

app.get('/student-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'student-dashboard.html'));
});

app.get('/student-courses', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'student-courses.html'));
});

app.get('/admin-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin-dashboard.html'));
});

app.get('/admin-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin-login.html'));
});

app.get('/cpp-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cpp-dashboard.html'));
});

app.get('/cpp-lesson', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cpp-lesson.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

// Start Server
const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

server.on('error', (err) => {
    console.error('SERVER ERROR:', err);
});

process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('UNHANDLED REJECTION:', reason);
});
