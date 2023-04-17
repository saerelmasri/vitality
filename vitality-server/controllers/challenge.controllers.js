const { json } = require('body-parser');
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

const challenge_enrolled_user = async (req, res) => {
    const { challenge_id, completation_status, earned_points } = req.body
    const token = req.header('Authorization')
    if(!token){
        res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const user_id = decoded.userId

        const checkUserChallengeQuery = 'SELECT * FROM challenge_enrolled WHERE user_id = ?'
        await sql.query(checkUserChallengeQuery, user_id, async(err, result) => {
            if(err){
                res.status(500).json({
                    status: 500,
                    message: err
                })
            }
            if(result.lenght > 0){
                res.status(401).json({
                    status:401,
                    message: 'User already enrolled in course'
                })
            }

            const enrolledUserQuery = 'INSERT INTO challenge_enrolled SET ?'
            const enrolledUser = { user_id, challenge_id, completation_status, earned_points } 

            await sql.query(enrolledUserQuery, enrolledUser, (err) => {
                if(err){
                    res.status(500).json({
                        status: 500,
                        message: err
                    })
                }
                res.status(201).json({
                    status: 201,
                    message: 'User enrolled'
                })
            })
        })
    }catch(err){
        res.status(500).json({
            status: 500,
            message: err
        })
    }
}

module.exports = {createWeeklyChallenge, challenge_enrolled_user}