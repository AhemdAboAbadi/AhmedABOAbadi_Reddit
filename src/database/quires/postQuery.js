const connection = require('../db_connection');

const postQuery = (userId, title, imageUrl) => connection.query(
  'INSERT INTO posts (user_id ,title, imageUrl) VALUES ($1,$2,$3) ;',
  [userId, title, imageUrl],
);

module.exports = postQuery;
