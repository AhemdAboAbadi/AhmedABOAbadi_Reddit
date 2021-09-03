const connection = require('../db_connection');

const getDataPost = (userId) => connection.query(
  'SELECT posts.user_id, posts.title, posts.imageUrl FROM posts WHERE user_id = $1;',
  [userId],
);

module.exports = getDataPost;
