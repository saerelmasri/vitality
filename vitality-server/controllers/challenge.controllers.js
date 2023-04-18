const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const createWeeklyChallenge = async (req, res) => {
    const { name, description, distance, rewards, start_date, end_date } = req.body
    const checkChallenge = 'SELECT * FROM weekly_challenge WHERE name = ?'

    await sql.query(checkChallenge, name, async(err, result) => {
        if(err){
            return res.status(500).json({
                status: 500,
                message: err
            })
        }

        if(result.lenght > 0){
            return res.status(401).json({
                status: 401,
                message: "Challenge already exist"
            })
        }

        const addChallenge = 'INSERT INTO weekly_challenge SET ?'
        const addQuery = { name, description, distance, rewards }
        await sql.query(addChallenge, addQuery, (err) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }
            return res.status(201).json({
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
        return res.status(401).json({
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
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }
            if(result.lenght > 0){
                return res.status(401).json({
                    status:401,
                    message: 'User already enrolled in course'
                })
            }

            const enrolledUserQuery = 'INSERT INTO challenge_enrolled SET ?'
            const enrolledUser = { user_id, challenge_id, completation_status, earned_points } 

            await sql.query(enrolledUserQuery, enrolledUser, (err) => {
                if(err){
                    return res.status(500).json({
                        status: 500,
                        message: err
                    })
                }
                return res.status(201).json({
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

const challenge_finished = async (req, res) => {
    const { challenge_id } = req.body
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const user_id = decoded.userId

        const getChallengeQuery = 'SELECT * FROM challenge_enrolled WHERE user_id = ? AND challenge_id = ?'
        await sql.query(getChallengeQuery, [user_id, challenge_id], async(err, result)=> {
            console.log(result);
            if(err){
                return res.status(500).json({
                    status:500,
                    message: err
                })
            }

            if(result[0].completation_status === 'completed'){
                return res.status(401).json({
                    status:401,
                    message: 'Challenge already completed'
                })
            }
            const checkDeadLineQuery = 'SELECT * FROM weekly_challenge WHERE id = ?'
            await sql.query(checkDeadLineQuery, result[0].challenge_id, async(err, result) => {
                if(err){
                    return res.status(500).json({
                        status:500,
                        message: err
                    })
                }
                const now = new Date()
                if(result[0].end_date < now){
                    return res.status(401).json({
                        status:401,
                        message: 'Challenge expired'
                    })
                }
                const reward = result[0].rewards
                const updateChallengeUser = 'UPDATE challenge_enrolled SET completation_status = ?, earned_points = ? WHERE user_id = ? AND challenge_id = ?';
                
                await sql.query(updateChallengeUser, ['completed', reward, user_id, challenge_id], (err, result) => {
                    if(err){
                       return res.status(500).json({
                            status:500,
                            message: err
                        })
                    }
                    return res.status(201).json({
                        status: 201,
                        message: {
                            message: 'Challenge Completed',
                            rewards: reward
                        }
                    })
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

const allWeeklyChallenges = async (req, res) => {
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const user_id = decoded.userId

        const leftJoinQuery = 'SELECT c.id, c.name, c.description, c.distance, c.rewards, c.created_at, c.end_at FROM weekly_challenge c LEFT JOIN challenge_enrolled e ON c.id = e.challenge_id AND e.user_id = ? WHERE e.challenge_id IS NULL'
        await sql.query(leftJoinQuery, user_id, (err, result) => {
            if(err){
                return res.status(500).json({
                    status:500,
                    message: err
                })
            }

            if(result.lenght === 0){
                return res.status(401).json({
                    status:401,
                    message: 'Not challenges for you today'
                })
            }

            return res.status(201).json({
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

const weeklyChallengeDetail = async (req, res) => {
    const { weekly_challenge_id } = req.body

    try{
        const query = 'SELECT * FROM weekly_challenge WHERE id = ?'
        await sql.query(query, weekly_challenge_id, (err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            return res.status(201).json({
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

module.exports = {createWeeklyChallenge, challenge_enrolled_user, challenge_finished, allWeeklyChallenges, weeklyChallengeDetail }