const { Router } = require('express')
const route = Router()
const {addNewrunningLog, fetchUserRunningSessions} = require('../controllers/running_log_session.controllers')

route.post('/addNewrunningLog', addNewrunningLog);
route.get('/fetchUserRunningSessions', fetchUserRunningSessions);

module.exports = route