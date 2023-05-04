const express = require('express');
const { Router } = require('express')
const route = Router()

const { addProfilePhoto } = require('../controllers/photos.controllers')

route.post("/addProfilePhoto", addProfilePhoto)


module.exports = route