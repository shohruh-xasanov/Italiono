const router = require('express').Router()
const {createMaster, getAll,masterDelete} = require('../controllers/masterController')
const upload = require('../fileUpload/imageUpload')

router.route('/master')
    .post(upload.single('image'),createMaster)
    .get(getAll)

router.delete('/master/:id', masterDelete)

module.exports = router