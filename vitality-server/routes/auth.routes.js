const { Router } = require('express');
const route = Router();

const { register, login } = require('../controllers/auth.controllers');

route.post('/register', register);
route.get('/login', login);

module.exports = route