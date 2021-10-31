const router = require('express').Router()
const {getAll, getElementById,create,orderDelete,createRu, getElementByIdRu} = require('../controllers/order')

router.get('/order', getAll)
router.post('/order/create', create)
router.post('/ru/order/create',createRu)
router.get('/ru/order/product/:id')
router.get('/order/product/:id', getElementById)
router.delete('/order/delete/:id', orderDelete)

module.exports = router