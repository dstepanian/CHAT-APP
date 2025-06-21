const User = require("../models/user");
const Message = require("../models/message");
const cloudinary = require("cloudinary");

const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id
        const filteredUsers = await User.find({_id: {$ne: loggedInUser}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (e) {
        console.log(e)
        res.status(500).json({message: "Internal Server Error"})
    }
}

const getMessages = async (req, res) => {
    try {
        const {_id: userToChatId} = req.params
        const myId = req.user._id

        const messages = await Message.find({
            $or: [
                {senderId: myId, receiverId: userToChatId},
                {senderId: userToChatId, receiverId: myId},
            ]
        })

        res.status(200).json(messages);
    } catch (e) {
        console.log(e)
        res.status(500).json({message: "Internal Server Error"})
    }

}

const sendMessage = async (req, res) => {
    try {
        const { text, image } = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let imageUrl
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(imageUrl);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            imageUrl: imageUrl,
        })

        await newMessage.save();

        // todo: realtime functionality with socket.io

        res.status(200).json(newMessage);
    } catch (e) {
        console.log(e)
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = {getUsersForSidebar, getMessages, sendMessage};