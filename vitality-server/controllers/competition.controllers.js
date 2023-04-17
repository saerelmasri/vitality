const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken')

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
        res.status(401).json({
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
                res.status(500).json({
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
        res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const user_id = decoded.userId

        const showAllInvitationQuery = 'SELECT sender_id, status FROM invitation WHERE recipient_id = ?'
        await sql.query(showAllInvitationQuery, user_id, (err, result) => {
            if(err){
                res.status(500).json({
                    status:500,
                    message: err
                })
            }
            if(Object.keys(result).length === 0){
                res.status(401).json({
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

module.exports = {createCompetition, sendInvition, showAllInvitations }