// external imports
const createError = require('http-errors');

// 404 error handler
const notFoundHandler = (req, res, next) => {
  next(createError(404, 'Your requested content is not found!'));
};

module.exports = { notFoundHandler };
