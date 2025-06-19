const express = require('express')
const {protectRoute} = require("../middleware/auth");
const {getUsersForSidebar} = require("../controllers/message");
const router = express.Router()

router.get('/users', protectRoute, getUsersForSidebar);

module.exports = router

