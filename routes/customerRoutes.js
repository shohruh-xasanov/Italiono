const router = require('express').Router()
const {createCustomer,getAll,deleteCustomer} = require('../controllers/customersController')
const upload = require('../fileUpload/imageUpload')

router.route('/customer')
    .post(upload.single('image'),createCustomer)
    .get(getAll)

router.delete('/customer/:id', deleteCustomer)

module.exports = router