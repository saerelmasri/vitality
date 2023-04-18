const { Router } = require('express')
const route = Router()
const jwt_middleware = require('../middleware/jwt.middleware')

const createTrophy = require('../controllers/trophy.controllers')

route.post('/createTrophy', jwt_middleware, createTrophy)

module.exports = route