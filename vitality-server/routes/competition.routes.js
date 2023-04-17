const { Router } = require('express')
const route = Router()
const {createCompetition, sendInvition} = require('../controllers/competition.controllers')

route.post('/createCompetition', createCompetition)
route.post('/sendInvitation', sendInvition)

module.exports = route