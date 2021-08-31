const connection = require('../db_connection');

const getProfileQuery = (email) => connection.query(
  `SELECT email , username FROM userss WHERE email='${email}';`,
);

module.exports = getProfileQuery;
