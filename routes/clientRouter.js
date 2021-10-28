const router = require('express').Router()
const {createUser, createUserPage,userFind,userUpdate,login,getLogin,logout} = require('../controllers/client')

router.route('/api/register')
    .post(createUser)
    .get(createUserPage)

router.route('/api/login')
    .post(login)
    .get(getLogin)
router.get('/logout', logout)

module.exports = router