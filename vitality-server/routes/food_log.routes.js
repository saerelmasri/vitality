const { Router } = require('express');
const route = Router();

const { addFoodLog, fetchUserMealLogs, getCaloriesIntakeByDate} = require('../controllers/food_log.controllers')

route.post('/addLog', addFoodLog);
route.get('/fetchUserMealLogs', fetchUserMealLogs);
route.get('/getCaloriesIntakeByDate', getCaloriesIntakeByDate);

module.exports = route