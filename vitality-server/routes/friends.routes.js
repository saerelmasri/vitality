const { Router } = require('express')
const route = Router()
const jwt_middleware = require('../middleware/jwt.middleware')
const {displayUsers, addFriendList, search_by_name} = require('../controllers/friends.controllers')

route.get('/displayUsers', displayUsers)
route.get('/search_by_name', jwt_middleware, search_by_name)
route.post('/addFriend', addFriendList)

module.exports = route