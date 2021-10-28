const router = require('express').Router()
const {createAbout, getAll,aboutDelete} = require('../controllers/aboutController')
const upload = require('../fileUpload/imageUpload')

router.route('/about')
    .post(upload.single('image'),createAbout)
    .get(getAll)

router.delete('/about/:id', aboutDelete)

module.exports = router