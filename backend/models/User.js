const {model} = require('mongoose');
const {UserSchema} = require('../Schema/UserSchema');

const User = new model("user",UserSchema);

module.exports = {User};