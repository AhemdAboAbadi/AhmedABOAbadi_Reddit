const joi = require('joi');

const signupSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  username: joi.string().required(),
  password: joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]')).required(),
});

module.exports = signupSchema;
