const jwt = require('jsonwebtoken')
const sql = require('../config/db.connection');
require('dotenv').config();

const update_profile_extra_info = async(req, res) => {
    const { column_name, valueToUpdate } = req.body

    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        const user_id = decoded.userId
        
        const query = `UPDATE user_info_extra SET ${column_name} = ? WHERE user_id = ?`
        console.log(valueToUpdate);
        await sql.query(query, [ valueToUpdate, user_id ], async(err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            
            
            const displayQuery = 'SELECT * FROM user_info_extra WHERE user_id = ?'
            await sql.query(displayQuery, user_id, (err, result) => {
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

        })
        
    }catch(err){
        res.status(500).json({
            status: 500,
            message: err
        })
    }
}

const update_profile_info = async(req, res) => {
    const { column_name, valueToUpdate } = req.body

    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        const user_id = decoded.userId
        
        const query = `UPDATE users SET ${column_name} = ? WHERE user_id = ?`
        console.log(valueToUpdate);
        await sql.query(query, [ valueToUpdate, user_id ], async(err) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }
            const displayQuery = 'SELECT * FROM users WHERE user_id = ?'
            await sql.query(displayQuery, user_id, (err, result) => {
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
        })
    }catch(err){
        res.status(500).json({
            status: 500,
            message: err
        })
    }
}

const user_details = async(req, res) => {
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }

    try{
        const decode = jwt.verify(token, process.env.JWT_TOKEN);
        const user_id = decode.userId

        const query = 'SELECT users.full_name, users.nickname, users.level, user_photo.photo_url, user_photo.is_profile FROM users JOIN user_photo ON users.id = user_photo.user_id WHERE users.id = ?'
        await sql.query(query, user_id, (err, result) => {
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

const user_extra_info = async(req, res) => {
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }
    try{
        const decode = jwt.verify(token, process.env.JWT_TOKEN);
        const user_id = decode.userId

        const query = 'SELECT * FROM user_info_extra WHERE user_id = ?'
        await sql.query(query, user_id, (err, result) => {
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

module.exports = {update_profile_extra_info, user_details, user_extra_info, update_profile_info }