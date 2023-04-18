const { Router } = require('express')
const route = Router()
const {update_profile_extra_info, user_details, user_extra_info, update_profile_info} = require('../controllers/user_profile.controllers')

route.put('/update_profile_extra_info', update_profile_extra_info)
route.put('/update_profile_info', update_profile_info)
route.get('/user_details', user_details)
route.get('/user_extra_info', user_extra_info)

module.exports = route