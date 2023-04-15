const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const addNewrunningLog = async(req, res) => {
    const { distance, duration, calories_burned, avg_peace } = req.body

    const token = req.header('Authorization')
    if(!token){
        return res.status(400).json({
            status: 400,
            message: 'Unauthorization'
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const user_id = decoded.userId

        const addSessionQuery = 'INSERT INTO running_log_session SET ?'
        const addSessionAtt = { user_id, distance, calories_burned, avg_peace, duration}

        await sql.query(addSessionQuery, addSessionAtt, (err) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            res.status(201).json({
                status: 201,
                message: "Running Session Logged"
            })
        })

    }catch(err){
        res.status(500).json({
            status: 500,
            message: err
        })
    }
}

module.exports = addNewrunningLog