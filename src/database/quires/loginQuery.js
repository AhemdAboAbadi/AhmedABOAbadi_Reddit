const connection = require('../db_connection');

const loginQuery = (email) => connection.query(`SELECT email FROM userss WHERE email = ${email}`);

module.exports = loginQuery;
