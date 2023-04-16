const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken')

const createWeeklyChallenge = async (req, res) => {
    const { name, description, distance, rewards, start_date, end_date } = req.body
    const checkChallenge = 'SELECT * FROM weekly_challenge WHERE name = ?'

    await sql.query(checkChallenge, name, async(err, result) => {
        if(err){
            res.status(500).json({
                status: 500,
                message: err
            })
        }

        if(result.lenght > 0){
            res.status(401).json({
                status: 401,
                message: "Challenge already exist"
            })
        }

        const addChallenge = 'INSERT INTO weekly_challenge SET ?'
        const addQuery = { name, description, distance, rewards }
        await sql.query(addChallenge, addQuery, (err) => {
            if(err){
                res.status(500).json({
                    status: 500,
                    message: err
                })
            }
            res.status(201).json({
                status: 201,
                message: "Weekly Challenge Created"
            })
        })
        
    })
}

module.exports = createWeeklyChallenge