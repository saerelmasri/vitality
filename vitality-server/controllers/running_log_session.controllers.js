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

const fetchUserRunningSessions = async(req, res) => {
    const token = req.header('Authorization')
    if(!token){
        return res.status(400).json({
            status: 400,
            message: 'Unauthorized'
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const user_id = decoded.userId

        const fetchRunnings = 'SELECT * FROM running_log_session WHERE user_id = ?'
        await sql.query(fetchRunnings, user_id, (err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            if(result.lenght === 0){
                return res.status(404).json({
                    status: 404,
                    message: 'No running sessions'
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

module.exports = { addNewrunningLog, fetchUserRunningSessions}