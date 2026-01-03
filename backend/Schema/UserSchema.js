const {Schema, modelNames} = require('mongoose');

const UserSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required:true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    createAt : {
        type : Date,
        default : new Date(),
    }
});

module.exports = {UserSchema};