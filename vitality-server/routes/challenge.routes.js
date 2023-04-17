const { Router } = require('express')
const route = Router()
const jwt_middleware = require('../middleware/jwt.middleware')
const {createWeeklyChallenge, challenge_enrolled_user, challenge_finished, allWeeklyChallenges, weeklyChallengeDetail} = require('../controllers/challenge.controllers')

route.post('/createWeeklyChallenge', createWeeklyChallenge)
route.post('/enrolled_user', challenge_enrolled_user)
route.post('/challenge_finished', challenge_finished)
route.post('/details',jwt_middleware, weeklyChallengeDetail)
route.get('/allWeeklyChallenges', allWeeklyChallenges)

module.exports = route