const { Router } = require('express')
const route = Router()
const jwtMiddleware = require('../middleware/jwt.middleware')

const {addVideoRoutine, fetchAllVideos }= require('../controllers/video_routines.controllers')

route.post('/addVideoRoutine', jwtMiddleware, addVideoRoutine)
route.get('/fetchAllVideos', jwtMiddleware, fetchAllVideos)

module.exports = route