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
        getHash(email).then((hash) =>
          comparePassword(password, hash.rows[0].password, (err, result) => {
            if (result) {
              console.log('you are logged');

              jwt.sign({ is_Admin: true }, 'token', (error, token) => {
                if (error) {
                  console.log(error);
                  res.status(500).json({ msg: 'Internal Server Error !' });
                } else {
                  console.log('the token', token);
                  res
                    .cookie('token', token, {
                      httpOnly: true,
                      secure: true,
                    })
                    .cookie('login', true)
                    .redirect('/index.html');
                }
              });
              res.redirect('/index.html');
            } else {
              console.log('email or password are Incorrect');
              res.send('email or password are Incorrect');
            }
          })
        );
      } else {
        console.log('email or password are Incorrect');
        res.redirect(301, '/login.html');
      }
    })
    .catch((erro) => console.log(erro));
};
//   console.log(email);
//   console.log(password);
//   loginQuery(email)
//     .then((result) => {
//       console.log(email);
//       console.log(result.rows);
//     })
//     .catch((err) => console.log(err));

module.exports = checkLogin;
