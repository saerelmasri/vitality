const { Router } = require('express')
const route = Router()
const {createWeeklyChallenge, challenge_enrolled_user, challenge_finished, allWeeklyChallenges} = require('../controllers/challenge.controllers')

route.post('/createWeeklyChallenge', createWeeklyChallenge)
route.post('/enrolled_user', challenge_enrolled_user)
route.post('/challenge_finished', challenge_finished)
route.get('/allWeeklyChallenges', allWeeklyChallenges)

module.exports = route