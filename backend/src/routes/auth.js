const express = require('express')
const router = express.Router()
const {protectRoute} = require('../middleware/auth')


const {login, logout, signup, updateProfile, checkAuth} = require('../controllers/auth')

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)

router.put('/update-profile', protectRoute, updateProfile)

router.get('/check', protectRoute, checkAuth)

module.exports = router