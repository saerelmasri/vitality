const { Router } = require('express');
const route = Router();

const addFoodLog = require('../controllers/food_log.controllers')

route.post('/addLog', addFoodLog);

module.exports = route