const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    age: {
        type: Number,
        required: [true, 'Please enter your age'],
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [8, 'Password must have atleast 8 characters'],
    },
    contactNo: {
        type: String,
        required: [true, 'Please enter your contact no.'],
        minLength: [10, 'Contact no. should be 10 digits long'],
        maxLength: [10, 'Contact no. should be 10 digits long']
    }
})

module.exports = mongoose.model('User', userSchema);