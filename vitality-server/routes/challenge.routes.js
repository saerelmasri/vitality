const { Router } = require('express')
const route = Router()
const createWeeklyChallenge = require('../controllers/challenge.controllers')

route.post('/createWeeklyChallenge', createWeeklyChallenge)

module.exports = route