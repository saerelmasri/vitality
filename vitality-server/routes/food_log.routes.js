const { Router } = require('express');
const route = Router();

const { addFoodLog, fetchUserMealLogs} = require('../controllers/food_log.controllers')

route.post('/addLog', addFoodLog);
route.get('/fetchUserMealLogs', fetchUserMealLogs);

module.exports = route