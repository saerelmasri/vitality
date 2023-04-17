const { Router } = require('express')
const route = Router()
const jwt_middleware = require('../middleware/jwt.middleware')
const {createCompetition, sendInvition, showAllInvitations, changeStatusInvitation, performing_competition, getWinner, challengeDetails } = require('../controllers/competition.controllers')

route.post('/createCompetition', createCompetition)
route.post('/sendInvitation', sendInvition)
route.get('/allInvitation', showAllInvitations)
route.post('/challengeDetails', jwt_middleware, challengeDetails)
route.post('/winner', jwt_middleware, getWinner)
route.put('/changeStatus', changeStatusInvitation)
route.post('/performingCompetition', performing_competition)

module.exports = route