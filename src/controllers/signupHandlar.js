/* eslint-disable no-console */
// const signupQuery = require('../database/quires/signupQuery');
// const { hashPassword } = require('../utils/hashPassword');
// const signupSchema = require('../utils/validation/signupValidation');

// const signupHandler = async (req, res) => {
//   try {
//     await signupSchema.validateAsync(req.body);
//     const { flName, userName, email, password } = req.body;
//     const hashed = await hashPassword(password);
//     signupQuery(flName, userName, email, hashed);
//     res.redirect(301, './login.html');
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).json({ msg: err.message });
//   }
// };
// module.exports = signupHandler;

// const signupHandler = async (req, res) => {
//   const { error } = signupSchema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ msg: error.message });
//   }
//   const {
//     flName, userName, email, password,
//   } = req.body;
//   try {
//     const hashed = await hashPassword(password);
//     signupQuery(flName, userName, email, hashed);
//     return res.redirect(301, './login.html');
//   } catch (err) {
//     return console.log(err);
//   }
// };

// /* eslint-disable no-console */
// const signupQuery = require('../database/quires/signupQuery');
// const { hashPassword } = require('../utils/hashPassword');
// const signupSchema = require('../utils/validation/signupValidation');

// const signupHandler = (req, res) => {
//   const { error } = signupSchema.validate(req.body);
//   if (error) {
//     res.send(error.message);
//   } else {
//     const {
//       flName, userName, email, password,
//     } = req.body;
//     hashPassword(password).then((hashed) => signupQuery(flName, userName, email, hashed))
//       .then(() => res.redirect(301, './login.html'))
//       .then(() => console.log(req.body))
//       .catch((err) => console.log(err));
//   }
// };
// module.exports = signupHandler;

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
