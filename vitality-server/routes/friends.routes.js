const { Router } = require('express')
const route = Router()
const {displayUsers, addFriendList} = require('../controllers/friends.controllers')

route.get('/displayUsers', displayUsers)
route.post('/addFriend', addFriendList)

module.exports = route