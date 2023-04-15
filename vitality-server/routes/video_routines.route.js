const { Router } = require('express')
const route = Router()
const jwtMiddleware = require('../middleware/jwt.middleware')

const addVideoRoutine = require('../controllers/video_routines.controllers')

route.post('/addVideoRoutine', jwtMiddleware, addVideoRoutine)

module.exports = route