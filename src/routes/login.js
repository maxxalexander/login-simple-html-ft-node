const express = require('express');
const controller = require('../controller/login');

const Router = express.Router();


Router.post('/auth', controller.loginUser);

module.exports = Router;
