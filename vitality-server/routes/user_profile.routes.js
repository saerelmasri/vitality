const { Router } = require('express')
const route = Router()
const {update_profile, user_details, user_extra_info} = require('../controllers/user_profile.controllers')

route.put('/update_profile', update_profile)
route.get('/user_details', user_details)
route.get('/user_extra_info', user_extra_info)

module.exports = route