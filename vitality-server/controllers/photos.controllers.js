const jwt = require('jsonwebtoken');
const sql = require('../config/db.connection');
require('dotenv').config();

const addProfilePhoto = async (req, res) => {
  const token = req.header('Authorization');
  const insertImage = process.env.BASE_URL + `public/images/${req.file.filename}`;

  if (!token) {
    return res.status(401).json({
      status: 401,
      message: 'Unauthorized'
    });
  }
  if (!req.file || !insertImage) {
    return res.status(400).json({
      status: 400,
      message: 'Bad request'
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    const user_id = decoded.userId;
  
    const query = `
      INSERT INTO user_photo (user_id, photo_url)
      VALUES (?, ?)
      ON DUPLICATE KEY UPDATE photo_url = ?
    `;
    await sql.query(query, [user_id, insertImage, insertImage]);
    return res.status(201).json({
      status: 201,
      message: 'Photo added successfully'
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: err
    });
  }
};

const getLastPhotoUrl = async (req, res) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({
      status: 401,
      message: 'Unauthorized'
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_TOKEN);
  const user_id = decoded.userId;

  try {
    const query = 'SELECT photo_url FROM user_photo WHERE user_id = ? ORDER BY id DESC LIMIT 1';
    await sql.query(query, [user_id], (err, result) => {
      if(err){
        return res.status(500).json({
          message: err
        })
      }
      if (result.length === 0) {
        return res.status(404).json({
          status: 404,
          message: 'No photos found for this user'
        });
      }
      return res.status(200).json({
        status: 200,
        message: result[0]
      });

    })
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: err
    });
  }
};

module.exports = { addProfilePhoto, getLastPhotoUrl };
