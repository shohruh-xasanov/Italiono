const router = require('express').Router()
const {createUser, createUserPage, userDelete, userFind, userUpdate} = require('../controllers/user/userController')
const {getLogin, login, logout} = require('../controllers/user/login')
const {roles} = require('../middleware/auth')
router.route('/login',)
    .post(login)
    .get(getLogin)
router.route('/api/create/user')
    .post(roles,createUser)
    .get(roles,createUserPage)

router.route('/api/user/search/:id')
    .delete(roles,userDelete)
    .get(roles,userFind)
    .put(roles,userUpdate)
    
router.route('/api/auth/logout',).get(roles,logout)


module.exports = router