const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createTrophy = async(req, res) => {
    const params = {
        name: req.body.name,
        description: req.body.description,
        image_url: req.body.image_url
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
}

module.exports = createTrophy