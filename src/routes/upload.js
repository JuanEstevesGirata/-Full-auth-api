const router = require('express').Router()
const uploadImage = require('../middleware/uploadImage')
const upload = require('../controllers/upload')
const auth = require('../middleware/auth')

router.post('/upload_avatar', uploadImage, upload.uploadAvatar)

module.exports = router