const sql = require('../config/db.connection');
require('dotenv').config();

const addVideoRoutine = async(req, res) => {
    const { routine_name, duration, image_url, video_link_url } = req.body

    const checkVideo = 'SELECT * FROM video_routines WHERE routine_name = ?'
    await sql.query(checkVideo, routine_name, async (err, result)=> {
        if(err){
            return res.status(500).json({
                status: 500,
                message: err
            })
        }

        if(result.length > 0){
            return res.status(400).json({
                status: 400,
                message: 'Video already stored'
            });
        }

        const newVideo = { routine_name, duration, image_url, video_link_url}
        const addVideoQuery = 'INSERT INTO video_routines SET ?'
        await sql.query(addVideoQuery, newVideo, (err) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            res.status(201).json({
                status: 201,
                message: 'Video Added Successfully'
            })
        })
    })
}

const fetchAllVideos = async(req, res) => {
    const fetchQuery = 'SELECT * FROM video_routines'
    await sql.query(fetchQuery, (err, result) => {
        if(err){
            return res.status(500).json({
                status: 500,
                message: err
            })
        }
        res.status(201).json({
            status: 201, 
            message: result
        });
    })
}

module.exports = {addVideoRoutine, fetchAllVideos}