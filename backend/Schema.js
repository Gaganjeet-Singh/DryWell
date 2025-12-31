const Joi = require('joi');

module.exports.ContactValidation = Joi.object({
  Contact: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    Subject: Joi.string().required(),
    message: Joi.string().required()
  })
});

module.exports.BookingValidation = Joi.object({
  Booking: Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    email: Joi.string().email().required(),
    pickupAddress: Joi.string().required(),
    pickupDate: Joi.date().required(),
    servicetype: Joi.string().required()
  })
});
