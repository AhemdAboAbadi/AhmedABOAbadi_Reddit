/* eslint-disable no-console */

const signupQuery = require('../database/quires/signupQuery');
const { hashPassword } = require('../utils/hashPassword');
const signupSchema = require('../utils/validation/signupValidation');

const signupHandler = (req, res) => {
  const { error } = signupSchema.validate(req.body);
  if (error) {
    res.status(400).json({ msg: error.message });
  }
  const { flName, userName, email, password } = req.body;
  hashPassword(password)
    .then((hashed) => signupQuery(flName, userName, email, hashed))
    .then(() => res.redirect(301, './login.html'))
    .catch((err) => res.status(500).json({ msg: err.message }));
};

module.exports = signupHandler;
