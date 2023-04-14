
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    Firstname : {
        type : String,
        required : true,
    },
    Lastname : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    Phone : {
        type : Number,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },

},{
    timestamps : true,
});


const User = mongoose.model('User', userSchema);

module.exports = User;