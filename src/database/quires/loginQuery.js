// const connection = require('../db_connection');

// const loginQuery = (email) => {
//   console.log(`SELECT email FROM userss WHERE email = ${email}`);
//   return connection.query(`SELECT email FROM userss WHERE email = ${email}`);
// };

// module.exports = loginQuery;

const connection = require('../db_connection');

const loginQuery = (email) => connection.query('SELECT email FROM userss WHERE email = $1', [email]);

module.exports = loginQuery;
