const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken')

const displayUsers = async(req, res) => {
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

        const displayUsersQuery = 'SELECT nickname, full_name FROM users WHERE id <> ?'
        await sql.query(displayUsersQuery, user_id, (err, result) => {
            if(err){
                res.status(500).json({
                    status:500,
                    message: err
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

module.exports = displayUsers