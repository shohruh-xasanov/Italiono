const router = require('express').Router()
const {getAll, getAbout, getElementById, getCatalog,changelanguage,getCollection} = require('../controllers/clientru/main')
const {changeru} = require('../middleware/lang')

router.get('/', changeru,getAll)
router.get('/about', getAbout)
router.get('/product/:id',getElementById)
router.get('/collection/:id', getCollection)
router.get('/catalog', getCatalog)
router.get('/changelang', changelanguage)

module.exports = router