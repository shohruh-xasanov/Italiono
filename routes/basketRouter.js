const router = require('express').Router()
const {basketSearch, createBasket,basketDelete,basketSearchRu,basketDeleteRu} =require('../controllers/basketController')

router.route('/basket/all/:id')
    .get(basketSearch)
router.route('/basket/:id')
    .get(createBasket)
router.get('/ru/basket/all/:id',basketSearchRu)

router.get('basket/delete/:id',basketDeleteRu)
router.get('/ru/basket/delete/:id', basketDelete)
module.exports = router