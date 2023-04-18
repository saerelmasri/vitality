const { Router } = require('express')
const route = Router()

const {addTracker,getAllStepsFromUser} = require('../controllers/step_counter.controllers')

route.post('/addTracker', addTracker)
route.get('/getAllStepsFromUser', getAllStepsFromUser)

module.exports = route