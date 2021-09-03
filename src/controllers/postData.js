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

// const signupQuery = require('../database/quires/signupQuery');
// const { hashPassword } = require('../utils/hashPassword');
// const signupSchema = require('../utils/validation/signupValidation');

// const signupHandler = (req, res) => {
//   const { error } = signupSchema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ msg: error.message });
//   }
//   const { flName, userName, email, password } = req.body;
//   return hashPassword(password)
//     .then((hashed) => signupQuery(flName, userName, email, hashed))
//     .then(() => res.redirect(301, './login.html'))
//     .catch((err) => res.status(500).json({ msg: err.message }));
// };

// module.exports = signupHandler;
