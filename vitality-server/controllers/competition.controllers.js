const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken')

const createCompetition = async (req, res) => {
    
    const { title, type, distance, workout_name, rules, duration } = req.body

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
         
        const date = new Date();
        date.setDate(date.getDate() + 1);

        const checkCompetition ='SELECT COUNT(*) AS count FROM competition WHERE created_by_user_id = ?'
        await sql.query(checkCompetition, user_id, async(err, result) => {
            if(err){
                res.status(500).json({
                    status:500,
                    message: err
                })
            }

            if (result[0].count > 0) {
                res.status(400).json({
                    status:400,
                    message: 'You have already created a competition'
                })
            }

            const createCompetitionQuery = 'INSERT INTO competition SET ?'
            const competationParams = { title, type, distance, workout_name, rules, created_by_user_id: user_id, duration, end_at: date }
            await sql.query(createCompetitionQuery, competationParams, (err) => {
                if(err){
                    res.status(500).json({
                        status:500,
                        message: err
                    })
                }

                res.status(201).json({
                    status:201,
                    message: 'Challenge created'
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

module.exports = createCompetition