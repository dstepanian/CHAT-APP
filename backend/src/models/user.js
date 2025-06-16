const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    profilePicture: {
        type: String,
        default: ''
    }
}, {timestamps: true})

module.exports = model('User', userSchema)