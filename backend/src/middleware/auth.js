const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { v2: cloudinary } = require('cloudinary');


const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if (!token) {
            return res.status(401).json({message: "No token provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (!decoded) {
            return res.status(401).send('Invalid token')
        }

        const user = await User.findById(decoded.userId).select('-password')

        if (!user) {
            return res.status(401).send('User not found')
        }

        req.user = user
        next()

    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

module.exports = {protectRoute}