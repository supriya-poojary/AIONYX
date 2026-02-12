const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const verifyToken = require('../middleware/authMiddleware');

// All routes here should be protected
router.post('/mark', verifyToken, progressController.markQuestionSolved);
router.get('/:studentId', verifyToken, progressController.getSolvedQuestions);
router.get('/stats/:studentId', verifyToken, progressController.getStudentStats);

// C++ Routes
router.post('/cpp/mark', verifyToken, progressController.markCppLessonCompleted);
router.get('/cpp/:studentId', verifyToken, progressController.getCppProgress);

// Profile Stats
router.get('/profile/:studentId', verifyToken, progressController.getUserProfileStats);

module.exports = router;
