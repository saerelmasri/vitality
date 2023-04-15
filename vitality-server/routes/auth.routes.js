const { Router } = require('express');
const route = Router();

const { register, login, getUserbyToken } = require('../controllers/auth.controllers');

route.post('/register', register);
route.get('/login', login);
route.get('/getUserbyToken', getUserbyToken);

module.exports = route