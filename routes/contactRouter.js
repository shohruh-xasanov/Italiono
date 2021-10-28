const router = require('express').Router()
const {createContact,getAll,deleteContact} = require('../controllers/contactController')

router.route('/contact')
    .post(createContact)
    .get(getAll)

router.delete('/contact/:id', deleteContact)

module.exports = router