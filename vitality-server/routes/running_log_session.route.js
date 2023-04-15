const { Router } = require('express')
const route = Router()
const addNewrunningLog = require('../controllers/running_log_session.controllers')

route.post('/addNewrunningLog', addNewrunningLog);

module.exports = route