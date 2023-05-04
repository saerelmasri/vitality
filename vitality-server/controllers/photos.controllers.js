const jwt = require('jsonwebtoken');
const sql = require('../config/db.connection');
const { promisify } = require('util');
require('dotenv').config();

const addProfilePhoto = async (req, res) => {
  const token = req.header('Authorization');

  const { photoData } = req.body;

  if (!token) {
    return res.status(401).json({
      status: 401,
      message: 'Unauthorized'
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_TOKEN);
  const user_id = decoded.userId;

  const query = 'UPDATE user_photo SET photo_url = ? WHERE user_id = ?';
  const params = [photoData, user_id];
  await sql.query(query, params, (err, result) => {
    if(err){
      return res.status(500).json({
        status: 500,
        message: err
      });
    }
    return res.status(200).json({
      status: 200,
      message: result
    });
  })
}


module.exports = { addProfilePhoto }
