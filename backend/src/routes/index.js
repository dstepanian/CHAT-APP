const auth = require('../routes/auth')
const message = require('../routes/message')
const {sayHi} = require("../controllers");
const router = require('express').Router()


router.use('/', message)
router.use('/auth', auth)

module.exports = router

