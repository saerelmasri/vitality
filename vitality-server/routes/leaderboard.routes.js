const { Router } = require('express')
const route = Router()
const jwt_middleware = require('../middleware/jwt.middleware')

const {getLeaderRunning, getLeaderLevel} = require('../controllers/leaderboard.controllers')

route.get('/running_leaderboard', jwt_middleware, getLeaderRunning)
route.get('/level_leaderboard', jwt_middleware, getLeaderLevel)

module.exports = route