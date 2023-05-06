const sql = require('../config/db.connection');

const getLeaderLevel = async (req, res) => {
  try {
    const query = `
        SELECT u.full_name, u.level, p.photo_url
        FROM users u
        LEFT JOIN (
        SELECT user_id, MAX(created_at) AS created_at
        FROM user_photo
        GROUP BY user_id
        ) max_photo ON u.id = max_photo.user_id
        LEFT JOIN user_photo p ON max_photo.user_id = p.user_id AND max_photo.created_at = p.created_at
        ORDER BY u.level DESC
    `;
    await sql.query(query, (err, result) => {
      if (err) {
        return res.status(500).json({
          status: 500,
          message: err,
        });
      }

      return res.status(201).json({
        status: 201,
        message: result,
      });
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err,
    });
  }
};

module.exports = { getLeaderLevel };