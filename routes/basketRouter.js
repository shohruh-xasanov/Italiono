const router = require('express').Router()
const {basketSearch, createBasket,basketDelete} =require('../controllers/basketController')

router.route('/basket/all/:id')
    .get(basketSearch)
router.route('/basket/:id')
    .get(createBasket)

router.get('/basket/delete/:id', basketDelete)
module.exports = router