const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const displayUsers = async(req, res) => {
    const token = req.header('Authorization')
    if (!token) {
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        const user_id = decoded.userId

        const displayUsersQuery = `
            SELECT u.id, u.nickname, u.full_name, up.photo_url
            FROM users u
            LEFT JOIN (
                SELECT user_id, photo_url
                FROM user_photo up1
                WHERE up1.created_at = (
                    SELECT MAX(created_at)
                    FROM user_photo up2
                    WHERE up1.user_id = up2.user_id
                )
            ) AS up ON u.id = up.user_id
            WHERE u.id <> ?
            AND u.id NOT IN (
                SELECT friend_user_id 
                FROM friends 
                WHERE user_id = ?
            )
        `

        await sql.query(displayUsersQuery, [user_id, user_id], (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            const usersWithPhotoUrls = result.map(user => {
                const photoUrl = user.photo_url ? user.photo_url : null
                return { ...user, photo_url: photoUrl }
            })

            return res.status(200).json({
                status: 200,
                message: usersWithPhotoUrls
            })
        })
    } catch (err) {
        res.status(500).json({
            status: 500,
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
    const { full_name, nickname } = req.body   

    try{
        let query = `SELECT nickname FROM users`

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

        const displayUsersQuery = `
        SELECT 
            users.id, 
            users.nickname, 
            latest_photo.photo_url 
        FROM 
            users 
            LEFT JOIN (
                SELECT user_id, photo_url
                FROM user_photo
                WHERE (user_id, created_at) IN (
                    SELECT user_id, MAX(created_at) 
                    FROM user_photo 
                    GROUP BY user_id
                )
            ) AS latest_photo ON users.id = latest_photo.user_id
            INNER JOIN friends ON users.id = friends.friend_user_id 
        WHERE 
            friends.user_id = ?;`

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