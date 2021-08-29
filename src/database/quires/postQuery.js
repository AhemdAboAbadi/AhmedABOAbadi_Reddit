/* eslint-disable camelcase */
const connection = require('../db_connection');

const postQuery = (user_id, title, content, imageUrl) => connection.query(
  'INSERT INTO posts (title, content, category, user_id) VALUES ($1,$2,$3,$4);',
  [user_id, title, content, imageUrl],
);

module.exports = postQuery;
