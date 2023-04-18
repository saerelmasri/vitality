const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const createCompetition = async (req, res) => {
    
    const { title, type, distance, workout_name, rules, duration } = req.body

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
         
        const date = new Date();
        date.setDate(date.getDate() + 1);

        const checkCompetition ='SELECT COUNT(*) AS count FROM competition WHERE created_by_user_id = ?'
        await sql.query(checkCompetition, user_id, async(err, result) => {
            if(err){
                return res.status(500).json({
                    status:500,
                    message: err
                })
            }

            if (result[0].count > 0) {
                return res.status(400).json({
                    status:400,
                    message: 'You have already created a competition'
                })
            }

            const createCompetitionQuery = 'INSERT INTO competition SET ?'
            const competationParams = { title, type, distance, workout_name, rules, created_by_user_id: user_id, duration, end_at: date, status: 'on going' }
            await sql.query(createCompetitionQuery, competationParams, (err, result) => {
                if(err){
                    return res.status(500).json({
                        status:500,
                        message: err
                    })
                }
                res.status(201).json({
                    status:201,
                    message: 'Challenge created',
                    competition_id: result.insertId
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

const sendInvition = async(req, res) => {
    const { competition_id, recipient_id, status } = req.body

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

        const sendInvitionQuery = 'INSERT INTO invitation SET ?'
        const sendInvitionParam = { competition_id, sender_id: user_id, recipient_id, status}
        await sql.query(sendInvitionQuery, sendInvitionParam, (err, result) => {
            if(err){
                return res.status(500).json({
                    status:500,
                    message: err
                })
            }

            res.status(201).json({
                status: 201,
                message: 'Invitation Sent'
            })
        })

    }catch(err){
        res.status(500).json({
            status:500,
            message: err
        })
    }
}

const showAllInvitations = async (req, res) => {
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

        const showAllInvitationQuery = 'SELECT competition_id, sender_id, status FROM invitation WHERE recipient_id = ?'
        await sql.query(showAllInvitationQuery, user_id, (err, result) => {
            if(err){
                return res.status(500).json({
                    status:500,
                    message: err
                })
            }
            if(Object.keys(result).length === 0){
                return res.status(401).json({
                    status: 401,
                    message: 'Invitation Inbox empty'
                })
            }
            res.status(201).json({
                status: 201,
                message: result
            })
        })

    }catch(err){
        res.status(500).json({
            status:500,
            message: err
        })
    }
}

const changeStatusInvitation = async(req, res) => {
    const { competition_id, status } = req.body 

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

        if( status === 'declined'){
            const deleteQuery = 'DELETE FROM invitation WHERE competition_id = ? AND recipient_id = ?'
            await sql.query(deleteQuery, [competition_id, user_id], (err) => {
                if(err){
                    return res.status(500).json({
                        status: 500,
                        message: err
                    })
                }

                res.status(201).json({
                    status: 201,
                    message: 'Invitation declined'
                })


            })
        }
        else if(status === 'accepted'){
            const startCompetitionQuery = 'UPDATE invitation SET status = ? WHERE recipient_id = ?'
            await sql.query(startCompetitionQuery, [ status, user_id ], async(err)=> {
                if(err){
                    return res.status(500).json({
                        status: 500,
                        message: err
                    })
                }

                const getCompetitionId = 'SELECT competition_id FROM invitation WHERE recipient_id = ?'
                await sql.query(getCompetitionId, user_id, (err, result ) => {
                    if(err){
                        return res.status(500).json({
                            status: 500,
                            message: err
                        })
                    }
                    console.log(result);
                    res.status(201).json({
                        status: 201,
                        message: result
                    })
                })

            })
        }
    }catch(err){
        res.status(500).json({
            status:500,
            message: err
        })
    }
}

const performing_competition = async(req, res) => {
    const { competition_id, duration_user } = req.body 

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

        let challenge_duration
        const competationDurationQuery = 'SELECT duration FROM competition WHERE id = ?'
        await sql.query(competationDurationQuery, competition_id, async(err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            challenge_duration = result[0].duration
            if(duration_user > challenge_duration){
                const deleteQuery = 'DELETE FROM invitation WHERE competition_id = ? AND recipient_id = ?'
                await sql.query(deleteQuery, [ competition_id, user_id ], (err) => {
                    if(err){
                        return res.status(500).json({
                            status: 500,
                            message: err
                        })
                    }
                })
                res.status(201).json({
                    status: 10,
                    message: 'You exceed the duration of the challenge. You lost'
                })
            }

            const competitionFinished = 'INSERT INTO user_competition_participation SET ?'
            const params = { challenge_id: competition_id, user_id, duration_user }
            await sql.query(competitionFinished, params, (err) => {
                if(err){
                    return res.status(500).json({
                        status: 500,
                        message: err
                    })
                }

                res.status(201).json({
                    status: 20,
                    message: {
                        message: 'You finished on time!',
                        results: params
                    }
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

const getWinner = async(req, res) => {
    const { challenge_id } = req.body
    try{
        const getWinnerQuery = 'SELECT user_id, duration_user FROM user_competition_participation WHERE challenge_id = ? ORDER BY duration_user ASC'
        await sql.query(getWinnerQuery, challenge_id, async(err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            const winner = result[0]

            const updateCompetition = 'UPDATE competition SET winner_user_id = ?, status = ? WHERE id = ?'
            await sql.query(updateCompetition, [winner.user_id, 'done', challenge_id], (err) => {
                if(err){
                    return res.status(500).json({
                        status: 500,
                        message: err
                    })
                }
                res.status(201).json({
                    status: 201,
                    message: 'Congratulations',
                    results: winner
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

const challengeDetails = async(req, res) => {
    const {challenge_id} = req.body
    try{
        const query = 'SELECT title, type, distance, workout_name, rules, created_by_user_id, end_at FROM competition WHERE id = ?'
        await sql.query(query, challenge_id, (err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            const challenge = result[0]
            console.log(challenge.created_by_user_id);
            const userQuery = 'SELECT full_name, nickname FROM users WHERE id = ?'
            sql.query(userQuery, challenge.created_by_user_id, (err, result) => {
                if(err){
                    return res.status(500).json({
                        status: 500,
                        message: err
                    })
                }
                const response = {
                    title: challenge.title,
                    type: challenge.type,
                    distance: challenge.distance,
                    workout_name : challenge.workout_name,
                    rules: challenge.rules,
                    deadline: challenge.end_at,
                    fullName: result[0].full_name,
                    nickName: result[0].nickname,
                }
                return res.status(201).json({
                    status: 201,
                    message: response
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

module.exports = { createCompetition, sendInvition, showAllInvitations, changeStatusInvitation, performing_competition, getWinner, challengeDetails }