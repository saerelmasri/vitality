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

module.exports = addTracker