const router = require('express').Router()
const {createCategory, getCategory,
    getCategoryById, categoryDelete, categoryUpdate} = require('../controllers/categoryController')
// const {roles} = require('../middleware/auth')

router.route('/category')
    .post(createCategory)
    .get(getCategory)

router.route('/category/:id')
    .get(getCategoryById)
    .delete(categoryDelete)
    .put(categoryUpdate)

module.exports = router