const { Router } = require('express');
const route = Router();

const { register, login, getUserbyToken, getUserInfo } = require('../controllers/auth.controllers');

route.post('/register', register);
route.get('/login', login);
route.get('/getUserbyToken', getUserbyToken);
route.get('/getUserInfobyToken', getUserInfo);

module.exports = route