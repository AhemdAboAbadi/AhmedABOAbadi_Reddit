const connection = require('../db_connection');

const getDataPost = () => connection.query(
  'SELECT posts.user_id, posts.title, posts.content, posts.imageUrl userss.name FROM posts INNER JOIN userss ON posts.user_id = userss.id',
);

module.exports = getDataPost;
