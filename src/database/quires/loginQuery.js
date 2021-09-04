const connection = require('../db_connection');

const loginQuery = (email) => connection.query('SELECT email , id ,username FROM userss WHERE email = $1', [email]);

module.exports = loginQuery;
