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
          comparePassword(password, hash.rows[0].password, (err, resultA) => {
            if (resultA) {
              console.log('you are logged');

              jwt.sign(
                { is_Admin: true, email: result.rows[0].email },
                'token',
                (error, token) => {
                  if (error) {
                    console.log(error);
                    res.status(500).json({ msg: 'Internal Server Error !' });
                  } else {
                    res.cookie('token', token).redirect('/index.html');
                    console.log('the token :', token);
                  }
                }
              );
              // res.redirect('/index.html');
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
