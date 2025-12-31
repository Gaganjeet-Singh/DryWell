const {BookingSchema} = require('../Schema/Booking');
const {model} = require('mongoose');

const Booking = new model("booking",BookingSchema);

module.exports = {Booking};