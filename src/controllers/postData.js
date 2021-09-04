/* eslint-disable consistent-return */
const postQuery = require('../database/quires/postQuery');
const addPostSchema = require('../utils/validation/addPost');

const addDataPostHandler = (req, res) => {
  const { id } = req.user;

  const { error } = addPostSchema.validate(req.body);
  if (error) {
    return res.status(500).json({ msg: error.message });
  }
  const { postImg, postTitle } = req.body;

  postQuery(id, postTitle, postImg)
    .then(() => res.json({ msg: 'post add successfully' }))
    .catch((err) => console.log(err));
};

module.exports = addDataPostHandler;
