const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const addFoodLog = async(req, res) => {
    const { mealID, log_date, food_name, calories, carbs, fats, protein, serving_size, number_serving } = req.body;

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
        const newLog = { userID: userId, mealID, log_date, food_name, calories, carbs, fats, protein, serving_size, number_serving }
    
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
    const { mealID } = req.body
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

        const fetchQuery = 'SELECT * FROM food_intakes WHERE userID = ? AND mealID = ?';
        const fetchParam = [ userID, mealID ]

        await sql.query(fetchQuery, fetchParam, (err, result) => {
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
        const userID = decode.userId;
        const query = 'SELECT daity_calories FROM daily_calories WHERE user_id = ?';
        const queryParam = { user_id: userID }

        await sql.query(query, queryParam, (err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            res.status(200).json({
                status: 200, 
                message: 'Successful',
                data: result
             });
        })
    }catch(err){
        res.status(500).json({
            status: 500, 
            message: err
        })
    }

}


module.exports = { addFoodLog, fetchUserMealLogs, getCaloriesIntakeByDate, addDailyCalories, getDailyCalories }