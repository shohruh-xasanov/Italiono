const router = require('express').Router()
const {create, getAll,elementDelete} = require('../controllers/collectionController')

router.post('/collection', create)
router.get('/collection', getAll)
router.route('/collection/:id')
    .delete(elementDelete)
module.exports = router