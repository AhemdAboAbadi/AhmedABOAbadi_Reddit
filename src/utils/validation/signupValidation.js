const joi = require('joi');

const signupSchema = joi.object({
  flName: joi.string().required(),
  email: joi.string().email().required(),
  userName: joi.string().required(),
  password: joi.string().min(8).required(),
});

module.exports = signupSchema;
