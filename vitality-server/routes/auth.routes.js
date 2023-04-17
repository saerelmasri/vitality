const { Router } = require('express');
const route = Router();

const { register, login, getUserbyToken, user_details } = require('../controllers/auth.controllers');

route.post('/register', register);
route.get('/login', login);
route.get('/getUserbyToken', getUserbyToken);
route.get('/user_details', user_details);

module.exports = route