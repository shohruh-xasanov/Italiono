const router = require('express').Router()
const {dashboart} = require('../controllers/admin/dashboard')

router.get('/dashboard', dashboart )

module.exports = router