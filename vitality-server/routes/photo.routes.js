const express = require('express');
const { Router } = require('express')
const route = Router()
const path = require('path')
const multer = require('multer')

const { addProfilePhoto } = require('../controllers/photos.controllers')

const storage = multer.diskStorage({
  destination: './vitality-server/image/',
  filename: (req, file, callback) => {
    return callback(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({
  storage: storage
})

route.post("/addProfilePhoto", upload.single('photo_url'), addProfilePhoto)

// serve uploaded images statically
route.use('/image', express.static(path.join(__dirname, '..', 'vitality-server', 'image')));

module.exports = route