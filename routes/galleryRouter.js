const router = require('express').Router()
const {createGallery,getAll,deleteGallery} = require('../controllers/galleryControoler')
const upload = require('../fileUpload/imageUpload')

router.route('/gallery')
    .post(upload.single('image'),createGallery)
    .get(getAll)

router.delete('/gallery/:id', deleteGallery)

module.exports = router