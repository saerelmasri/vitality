const { Router } = require('express');
const route = Router();

const { register, add_extra_info } = require('../controllers/auth.controllers');

route.post('/register', register);
route.post('/extraInfo', add_extra_info);

module.exports = route