const express = require('express')
const {protectRoute} = require("../middleware/auth");
const {getUsersForSidebar, getMessages, sendMessage} = require("../controllers/message");
const router = express.Router()

router.get('/users', protectRoute, getUsersForSidebar);
router.get('/:id', protectRoute, getMessages);

router.post('/send/:id', protectRoute, sendMessage);

module.exports = router

