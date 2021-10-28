const router = require('express').Router()
const {getAll, getAbout, getElementById, getCatalog,changelanguage,getCollection} = require('../controllers/client/main')
const {changeuz} = require('../middleware/lang')

router.get('/',changeuz, getAll)
router.get('/about', getAbout)
router.get('/product/:id',getElementById)
router.get('/collection/:id', getCollection)
router.get('/catalog', getCatalog)
router.get('/uz/changelang', changelanguage)

module.exports = router