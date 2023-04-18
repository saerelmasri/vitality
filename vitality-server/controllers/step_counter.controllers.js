const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const addTracker = async (req, res) => {
    const { steps_counter } = req.body

    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN)
    const user_id = decoded.userId

    const addQuery = 'INSERT INTO steps_counter SET ?'
    const params = { user_id, steps_counter }
    await sql.query(addQuery, params, (err) => {
        if(err){
            return res.status(500).json({
                status: 500,
                message: err
            })
        }

        return res.status(201).json({
            status: 201,
            message: 'Added steps'
        })
    })
}

const getAllStepsFromUser = async(req, res) => {
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN)
    const user_id = decoded.userId

    const fetchQuery = 'SELECT * FROM steps_counter WHERE user_id = ?'
    await sql.query(fetchQuery, user_id, (err, result) => {
        if(err){
            return res.status(500).json({
                status: 500,
                message: err
            })
        }
        if(result.lenght < 0){
            return res.status(404).json({
                status: 404,
                message: 'No steps tracked yet'
            })
        }

        return res.status(201).json({
            status: 201,
            message: result
        })
    })
}

module.exports = {addTracker, getAllStepsFromUser}