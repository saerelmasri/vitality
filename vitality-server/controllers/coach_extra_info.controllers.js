const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const add_coach_extra_info = async(req, res) => {
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
    const { coach_type, coach_experience, gym, description } = req.body
    const decode = jwt.verify(token, process.env.JWT_TOKEN);
    const userId = decode.userId;
    const checkUser = 'SELECT * FROM coach_info_extra WHERE coach_id = ?';
    sql.query(checkUser, userId, (err, result) => {
        if(err){
            return res.status(500).json({
                status: 500, 
                message: err
            });
        }

        if(result.length > 0){
            return res.status(400).json({
                status: 400,
                message: 'User already has extra info'
            });
        }
        const addExtraInfo = { coach_type, coach_experience, gym, description, coach_id: userId }
        const insertQuery = 'INSERT INTO coach_info_extra SET ?' ;

        sql.query(insertQuery, addExtraInfo, (err) => {
            if(err) {
                return res.status(500).json({
                    status: 500, 
                    message: err
                });
            }
            return res.status(200).json({
                status: 200,
                message: 'Extra info added'
            });
        })
    })
}

const coach_extra_info = async(req, res) => {
    const token = req.header('Authorization')
    const { id } = req.params;
    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }
    try{
        const query = `
        SELECT c.full_name, c.email, ci.*, cp.photo_url
        FROM coaches c
        LEFT JOIN coach_info_extra ci ON c.id = ci.coach_id
        LEFT JOIN (
            SELECT coach_id, photo_url
            FROM coach_photo cp1
            WHERE cp1.created_at = (
                SELECT MAX(created_at)
                FROM coach_photo cp2
                WHERE cp1.coach_id = cp2.coach_id
            )
        ) AS cp ON c.id = cp.coach_id
        WHERE c.id = ?`

        await sql.query(query, [id, id], (err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            if(result.length === 0){
                return res.status(404).json({
                    status: 404,
                    message: 'No coach'
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

const allCoaches = async(req, res) => {
    try{
        const query = `
            SELECT c.full_name, c.email, ci.*, cp.photo_url
            FROM coaches c
            LEFT JOIN coach_info_extra ci ON c.id = ci.coach_id
            LEFT JOIN (
                SELECT coach_id, photo_url
                FROM coach_photo cp1
                WHERE cp1.created_at = (
                    SELECT MAX(created_at)
                    FROM coach_photo cp2
                    WHERE cp1.coach_id = cp2.coach_id
                )
            ) AS cp ON c.id = cp.coach_id`
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
module.exports = { 
    add_coach_extra_info,
    coach_extra_info,
    allCoaches
 }