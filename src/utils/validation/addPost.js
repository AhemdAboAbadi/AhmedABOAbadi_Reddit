const joi = require('joi');

const addPostSchema = joi.object({
  postTitle: joi.string().required(),
  postImg: joi.string().required(),
});
module.exports = addPostSchema;
