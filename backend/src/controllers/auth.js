const bcrypt = require('bcryptjs');
const User = require("../models/user");
const generateToken = require("../lib/utils");

const signup = async (req, res) => {
    try {
        const {fullName, email, password} = req.body; // this line can be above the try block

        if (password.length < 8) {
            return res.status(400).send({error: "Password must be at least 8 characters"});
        }

        const user = await User.findOne({email});  // we check here if
        if (user) {
            return res.status(400).send({error: "Email already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            fullName,
            password: hashedPassword
        })

        if (newUser) {
            // jwt logics goes here
            generateToken(newUser._id, res);
            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email
            })
        }

    } catch (e) {
        console.error(e);
        res.status(400).json({message: "Internal Server Error"});
    }
}

const login = async (req, res) => {
    try {
        res.send('helllllllllo')
        console.log("login")
    } catch (e) {
        res.status(400).send({message: e.message});
        console.log(e)
    }
}

const logout = async (req, res) => {
    try {
        console.log("logout")
    } catch (e) {
        res.status(400).send({message: e.message});
        console.log(e)
    }
}

module.exports = {login, logout, signup}