const router = require('express').Router()
const {getAll, getElementById,create,orderDelete} = require('../controllers/order')

router.get('/order', getAll)
router.post('/order/create', create)
router.get('/order/product/:id', getElementById)
router.delete('/order/delete/:id', orderDelete)

module.exports = router