const { Router } = require('express');
const route = Router();

const { addFoodLog, fetchUserMealLogs, getCaloriesIntakeByDate, addDailyCalories, getDailyCalories} = require('../controllers/food_log.controllers')

route.post('/addLog', addFoodLog);
route.post('/addDailyCalories', addDailyCalories);
route.get('/fetchUserMealLogs', fetchUserMealLogs);
route.get('/getCaloriesIntakeByDate', getCaloriesIntakeByDate);
route.get('/getDailyCalories', getDailyCalories);

module.exports = route