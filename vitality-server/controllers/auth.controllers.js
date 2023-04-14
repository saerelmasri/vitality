const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { query } = require('express');
require('dotenv').config();

const register = async (req, res) => {
    const { nickname, username, phone_number, email, password } = req.body;
    const level = 0;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!emailRegex.test(email)){
        return res.status(400).json({
            status: 400,
            message: 'Please enter a valid email'
        });
    }

    if(!passwordRegex.test(password)){
        return res.status(400).json({
            status: 400,
            message: 'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character'
        });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const check_query = 'SELECT * FROM users WHERE email = ?';
    sql.query(check_query, email, (err, result) => {
        if(err) console.log(err);

        if(result.length > 0){
            return res.status(400).json({
                status: 400,
                message: 'Email already taken'
            });
        }
        const newUser = { username, nickname, email, password: hashPassword, phone_number, level};
        const insert_query = 'INSERT INTO users SET ?';
        sql.query(insert_query, newUser, (err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500, 
                    message: err
                });
            }

            const token = jwt.sign({ userId: result.insertId }, process.env.JWT_TOKEN);

            return res.status(200).json({
                status: 200,
                message: 'User Successfully Created',
                token: token
            });
        });
    });
}

const add_extra_info = async(req, res) => {
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }

    const { weight, height, gender, age, diet_type_id, goal_type_id, activity_type_id } = req.body
    
    const decode = jwt.verify(token, process.env.JWT_TOKEN);
    const userId = decode.userId;

    const checkUser = 'SELECT * FROM extra_fitness_info WHERE user_id = ?';
    sql.query(checkUser, userId, (err, result) => {
        if(err) console.log(err);

        if(result.length > 0){
            return res.status(400).json({
                status: 400,
                message: 'User already has extra info'
            });
        }

        const addExtraInfo = {weight, height, gender, age, user_id: userId, diet_type_id, goal_type_id, activity_type_id }
        const insertQuery = 'INSERT INTO extra_fitness_info SET ?' ;

        sql.query(insertQuery, addExtraInfo, (err) => {
            if(err) {
                return res.status(500).json({
                    status: 500, 
                    message: err
                });
            }

            return res.status(200).json({
                status: 200,
                message: 'Extra info added'
            });
        })
    })
}

module.exports = { register, add_extra_info }