/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const loginQuery = require('../database/quires/loginQuery');
const { comparePassword } = require('../utils/hashPassword');
const getHash = require('../database/quires/getHash');
const loginSchema = require('../utils/validation/loginValidation');

const checkLogin = (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(500).json({ msg: error.message });
  }
  const { email, password } = req.body;
  loginQuery(email)
    .then((result) => {
      if (result.rowCount) {
        getHash(email).then((hash) => comparePassword(password, hash.rows[0].password, (err, resultA) => {
          if (resultA) {
            jwt.sign(
              {
                is_Admin: true,
                email: result.rows[0].email,
                id: result.rows[0].id,
                username: result.rows[0].username,
              },
              'token',
              (erro, token) => {
                if (erro) {
                  res.status(500).json({ msg: 'Internal Server Error !' });
                } else {
                  res.cookie('token', token).redirect('/index.html');
                }
              },
            );
          } else {
            res.send('email or password are Incorrect');
          }
        }));
      } else {
        res.redirect(301, '/login.html');
      }
    })
    .catch((erro) => console.log(erro));
};

module.exports = checkLogin;
