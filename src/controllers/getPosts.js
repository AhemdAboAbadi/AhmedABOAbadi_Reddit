const getPostsQuery = require('../database/quires/getDataPost');

const getPosts = (req, res, next) => {
  const { id } = req.user;
  getPostsQuery(id)
    .then((data) => res.json({ posts: data.rows }))
    .catch((error) => next(error));
};

module.exports = getPosts;
