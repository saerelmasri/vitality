const { Router } = require('express')
const route = Router()
const {createWeeklyChallenge, challenge_enrolled_user, challenge_finished} = require('../controllers/challenge.controllers')

route.post('/createWeeklyChallenge', createWeeklyChallenge)
route.post('/enrolled_user', challenge_enrolled_user)
route.get('/challenge_finished', challenge_finished)

module.exports = route