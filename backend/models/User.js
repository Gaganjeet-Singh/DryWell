const {model} = require('mongoose');
const {UserSchema} = require('../Schema/UserSchema');
const bcrpyt = require("bcryptjs");

UserSchema.pre("save",async function() {
    this.password = await bcrpyt.hash(this.password,12);
});

const User = new model("user",UserSchema);
module.exports = {User};