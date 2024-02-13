const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
        type: String,
        required: [true, 'Please enter your username'],
        },
        email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        },
        password: {
        type: String,
        required: [true, 'Please enter your password'],
        },
        passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        },
    },
    {
        timestamps: true,
    }
    );


module.exports = mongoose.model('User', userSchema);