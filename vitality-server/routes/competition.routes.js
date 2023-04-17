const { Router } = require('express')
const route = Router()
const {createCompetition, sendInvition, showAllInvitations } = require('../controllers/competition.controllers')

route.post('/createCompetition', createCompetition)
route.post('/sendInvitation', sendInvition)
route.get('/allInvitation', showAllInvitations)

module.exports = route