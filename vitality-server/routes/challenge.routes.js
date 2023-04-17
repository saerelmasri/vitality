const { Router } = require('express')
const route = Router()
const {createWeeklyChallenge, challenge_enrolled_user} = require('../controllers/challenge.controllers')

route.post('/createWeeklyChallenge', createWeeklyChallenge)
route.post('/enrolled_user', challenge_enrolled_user)

module.exports = route