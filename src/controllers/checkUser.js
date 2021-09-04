/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

const checkUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(403).json({ msg: 'not authorized' });
  }
  jwt.verify(token, 'token', (err, decoded) => {
    if (err) {
      res.json({ msg: 'Error' });
    } else {
      const { username, email, id } = decoded;
      req.user = {
        username,
        email,
        id,
      };
      next();
    }
  });
};

module.exports = checkUser;
