const { Router } = require('express')
const route = Router()
const multer = require('multer')
const path = require('path')
const { addProfilePhoto, getLastPhotoUrl } = require('../controllers/photos.controllers')

var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, './public/images/')
  },
  filename: (req, file, callBack) => {
    callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({
  storage: storage
});

route.post("/addProfilePhoto", upload.single('image'), addProfilePhoto);
route.get("/getLastPhotoUrl", getLastPhotoUrl);

module.exports = route;