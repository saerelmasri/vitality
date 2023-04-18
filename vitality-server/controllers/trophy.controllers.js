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

module.exports = {createTrophy, updateTrophyInfo}