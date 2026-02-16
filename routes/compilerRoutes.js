const express = require('express');
const router = express.Router();
const compilerController = require('../controllers/compilerController');

router.post('/run-cpp', compilerController.runCpp);

module.exports = router;
