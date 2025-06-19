const auth = require(`./auth`)
const message = require(`./message`)
const {sayHi} = require("../controllers");
const router = require('express').Router()


router.use('/', message)
router.use('/auth', auth)

module.exports = router

