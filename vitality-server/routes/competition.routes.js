const { Router } = require('express')
const route = Router()
const {createCompetition, sendInvition, showAllInvitations, changeStatusInvitation } = require('../controllers/competition.controllers')

route.post('/createCompetition', createCompetition)
route.post('/sendInvitation', sendInvition)
route.get('/allInvitation', showAllInvitations)
route.put('/changeStatus', changeStatusInvitation)

module.exports = route