const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const displayUsers = async(req, res) => {
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

        const displayUsersQuery = 'SELECT id,nickname, full_name FROM users WHERE id <> ? AND id NOT IN ( SELECT friend_user_id FROM friends WHERE user_id = ?)'
        await sql.query(displayUsersQuery, [user_id, user_id], (err, result) => {
            if(err){
                return res.status(500).json({
                    status:500,
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

const addFriendList = async(req, res) => {
    const { friend_id } = req.body
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

        const addFriendQuery = 'INSERT INTO friends SET ?'
        const addFriendParams = { user_id, friend_user_id: friend_id }
        await sql.query(addFriendQuery, addFriendParams, (err, result) => {
            if(err){
                return res.status(500).json({
                    status:500,
                    message: err
                })
            }

            if(result.lenght > 0){
                return res.status(401).json({
                    status:401,
                    message: 'Already Friends'
                })
            }

            return res.status(201).json({
                status: 201,
                message: 'Friend Added Successfully'
            })
        })

        
    }catch(err){
        res.status(500).json({
            status:500,
            message: err
        })
    }
}

const search_by_name = async(req, res) => {
    const { full_name, nickname } = req.query   

    try{
        let query = `SELECT * FROM users`

        if(full_name || nickname){
            query += ` WHERE `
            if(full_name){
                query += `full_name LIKE '%${full_name}%'`
                if(nickname) query += ` OR `
            }
            if(nickname){
                query += `nickname LIKE '%${nickname}%'`
            }
        }
        await sql.query(query,(err, result) => {
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

const displayMyFriends = async(req, res) => {
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

        const displayUsersQuery = 'SELECT id, nickname FROM users WHERE id IN ( SELECT friend_user_id FROM friends WHERE user_id = ?)'
        await sql.query(displayUsersQuery, [user_id], (err, result) => {
            if(err){
                return res.status(500).json({
                    status:500,
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

module.exports = {displayUsers, addFriendList, search_by_name, displayMyFriends}