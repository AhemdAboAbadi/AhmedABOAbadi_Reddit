require('env2')('.env');

const { Pool } = require('pg');

const { NODE_ENV, DB_URL, DEV_DB_URL, TEST_DB_URL } = process.env;

let dbUrl = '';

switch (NODE_ENV) {
  case 'production':
    dbUrl = DB_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  case 'test':
    dbUrl = TEST_DB_URL;
    break;
  default:
    throw new Error('No Database is founded !');
}

const options = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = new Pool(options);
