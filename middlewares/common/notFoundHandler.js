// external imports
const createError = require('http-errors');

// 404 error handler
const notFoundHandler = (req, res, next) => {
  res.status(404).json({ error: 'Requested route not found!' });
  next();
};

module.exports = { notFoundHandler };
