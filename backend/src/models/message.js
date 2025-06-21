const {Schema, model} = require("mongoose");
const mongoose = require("mongoose");

const messageSchema = new Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    text: {
        type: String,
    },
    image: {
        type: String,
    }
}, {timestamps: true});

module.exports = model("Message", messageSchema);