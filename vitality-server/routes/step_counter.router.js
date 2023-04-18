const { Router } = require('express')
const route = Router()
const jwt_middleware = require('../middleware/jwt.middleware')

const addTracker = require('../controllers/step_counter.controllers')

route.post('/addTracker', addTracker)

module.exports = route