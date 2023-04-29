const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const addFoodLog = async(req, res) => {
    const { mealID, food_name, calories, carbs, fats, protein, serving_size } = req.body;

    const token = req.header('Authorization');
    if(!token){
        return res.status(400).json({
            status:400,
            message: 'Unauthorized'
        });
    }

    try{
        const decode = jwt.verify(token, process.env.JWT_TOKEN);
        const userId = decode.userId;
        const insertLog = 'INSERT INTO food_intakes SET ?'
        const newLog = { userID: userId, mealID, food_name, calories, carbs, fats, protein, serving_size }
    
        await sql.query(insertLog, newLog, (err) =>{
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err    
                })
            }

            res.status(201).json({
                status: 201,
                message: 'Food logged successfully'
            })
        })
    }catch(err){
        res.status(500).json({
            status: 500, 
            message: err
        });
    }
}

const fetchUserMealLogs = async(req, res) => {
    const mealID = req.params.mealID;
    const token = req.header('Authorization')
    if(!token){
        return res.status(400).json({
            status: 400,
            message: 'Unauthorized'
        })
    }

    try{
        const decode = jwt.verify(token, process.env.JWT_TOKEN);
        const userID = decode.userId;

        const fetchQuery = 'SELECT food_name, calories, userID FROM food_intakes WHERE userID = ? AND mealID = ?';
        
        await sql.query(fetchQuery, [userID, mealID], (err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }
            if(result.length === 0) {
                return res.status(404).json({
                    status: 404,
                    message: 'No logs found for the specified mealID'
                })
            }
            res.status(201).json({
                status: 201,
                message: result
            })
        })
    }catch(err){
        res.status(500).json({
            status: 500,
            message: err
        })
    }
}

const getCaloriesIntakeByDate = async (req, res) => {
    const { log_date } = req.body

    const token = req.header('Authorization')
    if(!token){
        return res.status(400).json({
            status: 400,
            message: 'Unauthorized'
        })
    }

    try{
        const decode = jwt.decode(token, process.env.JWT_TOKEN);
        const userID = decode.userId;
        const query = 'SELECT SUM(calories) AS totalCalories FROM food_intakes WHERE userID = ? AND DATE(log_date) = ?';
        const queryParam = [ userID, log_date ]

        await sql.query(query, queryParam, (err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            const totalCalories = result[0].totalCalories;
            res.status(200).json({
                status: 200, 
                message: totalCalories
             });
        })
    }catch(err){
        res.status(500).json({
            status: 500, 
            message: err
        })
    }
}

const addDailyCalories = async (req, res) => {
    const { daily_calories } = req.body

    const token = req.header('Authorization')
    if(!token){
        return res.status(400).json({
            status: 400,
            message: 'Unauthorized'
        })
    }
    try{
        const decode = jwt.decode(token, process.env.JWT_TOKEN);
        const userID = decode.userId;
        const query = 'INSERT INTO daily_calories SET ?';
        const queryParam = { user_id: userID, daity_calories: daily_calories }

        await sql.query(query, queryParam, (err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            res.status(200).json({
                status: 200, 
                message: 'Daily Calories Added'
             });
        })
    }catch(err){
        res.status(500).json({
            status: 500, 
            message: err
        })
    }

}

const getDailyCalories = async (req, res) => {
    const token = req.header('Authorization')
    if(!token){
        return res.status(400).json({
            status: 400,
            message: 'Unauthorized'
        })
    }
    try{
        const decode = jwt.decode(token, process.env.JWT_TOKEN);
        const user_id = decode.userId;
        const query = 'SELECT * FROM daily_calories WHERE user_id = ?';
        const queryParam = [user_id]

        await sql.query(query, queryParam, (err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }
            const calories = result[0].daity_calories
            res.status(200).json({
                status: 200, 
                message: calories
             });
        })
    }catch(err){
        res.status(500).json({
            status: 500, 
            message: err
        })
    }

}

const sumOfCalories = async (req, res) => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(400).json({
        status: 400,
        message: 'Unauthorized'
      });
    }
  
    try {
      const decode = jwt.decode(token, process.env.JWT_TOKEN);
      const user_id = decode.userId;
  
      const query = 'SELECT mealID, SUM(calories) as total_calories FROM food_intakes WHERE userID = ? GROUP BY mealID;';
      const queryParam = [user_id];
  
      await sql.query(query, queryParam, (err, result) => {
        if (err) {
          return res.status(500).json({
            status: 500,
            message: err
          });
        }
  
        if (!result || result.length === 0) {
          return res.status(404).json({
            status: 404,
            message: 'No results found'
          });
        }
  
        let calories = {
          breakfast: 0,
          lunch: 0,
          dinner: 0
        };
  
        result.forEach(item => {
          if (item.mealID === 1) {
            calories.breakfast = item.total_calories;
          } else if (item.mealID === 2) {
            calories.lunch = item.total_calories;
          } else if (item.mealID === 3) {
            calories.dinner = item.total_calories;
          }
        });
  
        res.status(200).json({
          status: 200,
          message: calories
        });
      });
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err
      });
    }
  };
  

module.exports = { addFoodLog, fetchUserMealLogs, getCaloriesIntakeByDate, addDailyCalories, getDailyCalories, sumOfCalories }