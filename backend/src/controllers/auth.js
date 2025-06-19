const bcrypt = require('bcryptjs');
const User = require("../models/user");
const {generateToken} = require("../lib/utils");
const {cloudinary} = require("../lib/cloudinary");

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
        console.log(e);
        res.status(400).json({message: "Internal Server Error"});
    }
}
const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({message: "Invalid credentials"});
        }

        generateToken(user._id, res);

        res.status(200).json({
            message: "Authentication successfully",
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({message: "Internal Server Error"});
    }
}
const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logout successfully"});
    } catch (e) {
        console.log(e);
        res.status(400).json({message: "Internal Server Error"});
    }
}

const updateProfile = async (req, res) => {
    try {
        const {profilePicture} = req.body;
        const userId = req.user._id;

        if (!profilePicture) {
            return res.status(401).send('Profile picture is missing');
        }

        const uploadResponse = await cloudinary.uploader.upload(profilePicture);
        const updatedUser = await User.findByIdAndUpdate(userId, {profilePicture: uploadResponse.secure_url}, {new: True})

        res.status(200).json({updatedUser})


    } catch (e) {
        console.log(e);
        res.status(400).json({message: "Internal Server Error"});
    }

}

const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = {login, logout, signup, updateProfile, checkAuth};