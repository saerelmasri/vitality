const { Router } = require('express')
const route = Router()
const displayUsers = require('../controllers/friends.controllers')

route.get('/displayUsers', displayUsers)

module.exports = route