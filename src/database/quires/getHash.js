const connection = require('../db_connection');

const getHash = (email) => connection.query(`SELECT password FROM userss WHERE email='${email}'`);

module.exports = getHash;
