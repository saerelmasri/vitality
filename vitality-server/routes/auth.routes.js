const { Router } = require('express');
const route = Router();

const register = require('../controllers/auth.controllers');

route.post('/register', register);

module.exports = route