const jwt = require('jsonwebtoken')
const sql = require('../config/db.connection')
require('dotenv').config();

const addProfilePhoto = async(req, res) => {
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }
    const decoded = jwt.verify(token, process.env.JWT_TOKEN)
    const user_id = decoded.userId

    const query = 'INSERT INTO user_photo SET ?'
    const params = { 
        user_id,
        photo_url: req.file.filename, 
        is_profile: req.body.is_profile,   
    }
    await sql.query(query, params, (err, result) => {
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
}

module.exports = {addProfilePhoto}