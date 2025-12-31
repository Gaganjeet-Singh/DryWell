const {Schema} = require('mongoose');

const ContactSchema = new Schema({
    name : {
        type: String,
        required:true
    },
    email : {
        type: String,
        required:true,
        unique:true
    },
    phone: {
        type:Number,
        required:true
    },
    subject : {
        type : String,
        required:true
    },
    message : {
        type: String,
        required: true
    }
});

module.exports = {ContactSchema};