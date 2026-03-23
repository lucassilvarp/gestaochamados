const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// POST /login route
router.post('/login', authController.login);

// POST /register route
router.post('/register', authController.register);

module.exports = router;