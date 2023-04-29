const { Router } = require('express');
const route = Router();

const { addFoodLog, fetchUserMealLogs, getCaloriesIntakeByDate, addDailyCalories, getDailyCalories, sumOfCalories, sumOfNutrients } = require('../controllers/food_log.controllers')

route.post('/addLog', addFoodLog);
route.post('/addDailyCalories', addDailyCalories);
route.get('/fetchUserMealLogs/:mealID', fetchUserMealLogs);
route.get('/getCaloriesIntakeByDate', getCaloriesIntakeByDate);
route.get('/getDailyCalories', getDailyCalories);
route.post('/sumOfCalories', sumOfCalories);
route.get('/sumOfNutrients', sumOfNutrients);

module.exports = route