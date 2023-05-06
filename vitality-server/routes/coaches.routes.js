const { Router } = require('express');
const route = Router();
const multer = require('multer')
const path = require('path')

const { register, login, getCoachesInfo } = require('../controllers/coaches.controllers');
const { add_coach_extra_info, coach_extra_info } = require('../controllers/coach_extra_info.controllers')
const { addProfilePhoto, getLastPhotoUrl } = require('../controllers/coach_photo.controllers')

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, './public/coaches/')
    },
    filename: (req, file, callBack) => {
      callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({
    storage: storage
  });

route.post('/register', register);
route.post('/login', login);
route.get('/getCoachesInfo', getCoachesInfo);
route.post('/add_coach_extra_info', add_coach_extra_info)
route.get('/get_coach_extra_info', coach_extra_info)
route.post('/addProfilePhoto',upload.single('image'), addProfilePhoto)
route.get('/getLastPhotoUrl', getLastPhotoUrl)


module.exports = route