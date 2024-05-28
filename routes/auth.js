const express = require('express');
const Authrouter = express.Router();
const authController = require('../controllers/authController');

//Authrouter.post('/register', authController.register);
Authrouter.post('/login', authController.login);

module.exports = Authrouter;
