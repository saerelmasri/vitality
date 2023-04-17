const { Router } = require('express')
const route = Router()
const {createCompetition, sendInvition, showAllInvitations, changeStatusInvitation, performing_competition } = require('../controllers/competition.controllers')

route.post('/createCompetition', createCompetition)
route.post('/sendInvitation', sendInvition)
route.get('/allInvitation', showAllInvitations)
route.put('/changeStatus', changeStatusInvitation)
route.post('/performingCompetition', performing_competition)

module.exports = route