const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

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
module.exports = { add_extra_info }