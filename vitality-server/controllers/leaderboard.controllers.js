const sql = require('../config/db.connection');

const getLeaderRunning = async (req, res) => {
    try{
        const query = 'SELECT u.id, u.full_name, ua.highest_distance FROM users u JOIN ( SELECT ua.user_id, MAX(ua.total_distance) as highest_distance FROM running_log_session ua GROUP BY ua.user_id) ua ON u.id = ua.user_id ORDER BY ua.highest_distance DESC;'
        await sql.query(query, (err, result) => {
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
            status:500,
            message: err
        })
    }
}

const getLeaderLevel = async(req, res) => {
    try{

        const query = 'SELECT id, full_name, level FROM users ORDER BY level DESC'
        await sql.query(query, (err, result) => {
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

module.exports = {getLeaderRunning, getLeaderLevel}