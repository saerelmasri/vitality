const { Router } = require('express');
const route = Router();
const { add_extra_info } = require('../controllers/extra_info.controllers');

route.post('/extraInfoUser', add_extra_info);

module.exports = route