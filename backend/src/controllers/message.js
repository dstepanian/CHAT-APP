const User = require("../models/User");

const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id
        const filteredUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");

        res.status(200).json(filteredUsers);
    } catch (e) {
        console.log(e)
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = getUsersForSidebar;