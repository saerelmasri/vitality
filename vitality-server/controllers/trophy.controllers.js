const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createTrophy = async(req, res) => {
    const params = {
        name: req.body.name,
        description: req.body.description,
        image_url: req.file.filename
    }

    

    const checkTrophy = 'SELECT * FROM trophies WHERE name = ?'
    await sql.query(checkTrophy, params.name, async(err, result) => {
        if(err){
            return res.status(500).json({
                status: 500,
                message: err
            })
        }

        if(result.length > 0){
            return res.status(401).json({
                status: 401,
                message: 'Trophy already exists'
            })
        }
        const addTrophyQuery = 'INSERT INTO trophies SET ?'
        await sql.query(addTrophyQuery, params, (err) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }
    
            return res.status(201).json({
                status: 201,
                message: 'Trophy created successfully'
            })
        })
    })    
}

const updateTrophyInfo = async(req, res) => {
    
    const { id, column_name, newValue } = req.body

    const updateTrophyQuery = `UPDATE trophies SET ${column_name} = ? WHERE id = ?`
    await sql.query(updateTrophyQuery, [newValue, id], (err,result) => {
        if(err){
            return res.status(500).json({
                status: 500,
                message: err
            })
        }
        return res.status(201).json({
            status: 201,
            message: "Updated"
        })
    })
}

const updateTrophyImg = async(req, res) => {
    const params = {
        id: req.body.id,
        image_url: req.file.filename
    }
    const updateTrophyQuery = `UPDATE trophies SET image_url = '${params.image_url}' WHERE id = ${params.id}`;
    await sql.query(updateTrophyQuery, (err) => {
        if(err){
            return res.status(500).json({
                status: 500,
                message: err
            })
        }
        return res.status(201).json({
            status: 201,
            message: "Updated"
        })
    })
}

const getAllTrophies = async (req, res) => {
    const fetch = 'SELECT * FROM trophies'
    await sql.query(fetch, (err, result) => {
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

const getTrophyByID = async(req, res) => {
    const { id } = req.body

    const fetch = 'SELECT * FROM trophies WHERE id= ? '
    await sql.query(fetch, id, (err, result) => {
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

const add_Trophy_To_User = async(req, res) => {
    const token = req.header('Authorization')
    if(!token){
        return res.status(500).json({
            status: 500,
            message: err
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN)
    const user_id = decoded.userId

    const { trophy_id } = req.body
    const addQuery = 'INSERT INTO user_trophies SET ?'
    const params = { user_id, trophy_id}
    await sql.query(addQuery, params, (err) => {
        if(err){
            return res.status(500).json({
                status: 500,
                message: err
            })
        }

        return res.status(201).json({
            status: 201,
            message: 'Congratulations! Trophy earned!'
        })
    })
}
module.exports = {createTrophy, updateTrophyInfo, updateTrophyImg, getAllTrophies, getTrophyByID, add_Trophy_To_User }