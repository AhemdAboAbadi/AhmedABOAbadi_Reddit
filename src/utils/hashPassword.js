/* eslint-disable no-shadow */
const bcrypt = require('bcryptjs');

const hashPassword = (password) => bcrypt.hash(password, 10);

const comparePassword = (password, hashPassword, callback) => {
  bcrypt.compare(password, hashPassword, callback);
};

module.exports = { hashPassword, comparePassword };
