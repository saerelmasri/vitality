const { Router } = require('express')
const route = Router()
const path = require('path')
const multer = require('multer')
const jwt_middleware = require('../middleware/jwt.middleware')

const storage = multer.diskStorage({
    destination: './vitality-server/image/trophies',
    filename: (req, file, callback) => {
        return callback(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

const {createTrophy, updateTrophyInfo} = require('../controllers/trophy.controllers')

route.post('/createTrophy', [jwt_middleware, upload.single('image_url')], createTrophy)
route.put('/updateTrophyInfo', jwt_middleware, updateTrophyInfo)

module.exports = route