const router = require('express').Router()
const {searchNews, searchNewsclient,searchNewsclientru} = require('../controllers/searchController')
const {roles} = require('../middleware/auth')

router.get('/api/search',roles, searchNews)
router.get('/search/', searchNewsclient)
router.get('/ru/search/', searchNewsclientru)

module.exports = router