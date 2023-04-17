const { Router } = require('express')
const route = Router()
const createCompetition = require('../controllers/competition.controllers')

route.post('/createCompetition', createCompetition)

module.exports = route