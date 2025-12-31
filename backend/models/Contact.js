const {ContactSchema} = require('../Schema/Contact');
const {model} = require('mongoose');

const Contact = new model("contact",ContactSchema);

module.exports = {Contact};