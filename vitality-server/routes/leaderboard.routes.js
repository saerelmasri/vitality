const { Router } = require('express')
const route = Router()
const jwt_middleware = require('../middleware/jwt.middleware')

const getLeaderRunning = require('../controllers/leaderboard.controllers')

route.get('/running_leaderboard', jwt_middleware, getLeaderRunning)

module.exports = route