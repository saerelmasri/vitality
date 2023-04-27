const sql = require('../config/db.connection');

const getLeaderLevel = async(req, res) => {
    try{

        const query = 'SELECT id, full_name, level FROM users ORDER BY level DESC'
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

module.exports = {getLeaderLevel}