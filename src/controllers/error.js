/* eslint-disable no-unused-vars */
const { join } = require('path');

function errorNotFound(req, res, next) {
  res
    .status(404)
    .sendFile(join(__dirname, '..', '..', 'public', 'error', '404.html'));
}

function errorServer(error, req, res, next) {
  res
    .status(500)
    .sendFile(join(__dirname, '..', '..', 'public', 'error', '500.html'));
}

module.exports = { errorNotFound, errorServer };
