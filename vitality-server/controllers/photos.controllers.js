const jwt = require('jsonwebtoken')
const sql = require('../config/db.connection')
require('dotenv').config();

const addProfilePhoto = async (req, res) => {
    const token = req.header('Authorization')
    if (!token) {
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
    }
    await sql.query(query, params, (err, result) => {
      if (err) {
        return res.status(500).json({
          status: 500,
          message: err
        })
      }
  
      // return the full URL of the uploaded image
      const baseUrl = 'http://192.168.1.104:5000/vitality-server/image/';
      const photoUrl = baseUrl + req.file.filename;
      
      return res.status(201).json({
        status: 201,
        message: photoUrl
      })
    })
  }

module.exports = {addProfilePhoto}