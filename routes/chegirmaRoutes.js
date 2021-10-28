const router = require('express').Router()
const {createChegirma,getAll,deleteChegirma} = require('../controllers/chegirmaController')

router.route('/chegirma')
    .post(createChegirma)
    .get(getAll)

router.delete('/chegirma/:id', deleteChegirma)

module.exports = router