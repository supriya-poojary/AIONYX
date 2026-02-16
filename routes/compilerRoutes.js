const express = require('express');
const router = express.Router();
const compilerController = require('../controllers/compilerController');

router.post('/run-cpp', compilerController.runCpp);
router.post('/run-python', compilerController.runPython);

module.exports = router;
