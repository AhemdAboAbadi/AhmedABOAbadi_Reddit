const connection = require('../db_connection');

const signupQuery = (name, username, email, password) => connection.query(
  'INSERT INTO userss (name, email,username ,password) VALUES ($1,$2,$3,$4);',
  [name, email, username, password],
);

module.exports = signupQuery;
