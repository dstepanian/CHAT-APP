const auth = require(`./auth`)
const {sayHi} = require("../controllers");
const router = require('express').Router()


router.get('/', sayHi)
router.use('/auth', auth)

module.exports = router

