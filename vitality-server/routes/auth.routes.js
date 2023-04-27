const { Router } = require('express');
const route = Router();

const { register, login, getUserbyToken, getUserInfo, removeUser } = require('../controllers/auth.controllers');

route.post('/register', register);
route.post('/login', login);
route.get('/getUserbyToken', getUserbyToken);
route.get('/getUserInfobyToken', getUserInfo);
route.delete('/removeUser', removeUser)

module.exports = route