const { create } = require('@mui/material/styles/createTransitions');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        uique : true,
        minlength : 2,
        maxlength : 30,
    },
    userId : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        minlength : 8,
        maxlength : 16,
    },
    createdAt : {
        type : Date,
        default : Date.now,
    },
});

const User = mongoose.model.User || mongoose.model('User', userSchema);

module.exports = User;