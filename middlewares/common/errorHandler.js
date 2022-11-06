// default error handler
const errorHandler = (err, req, res, next) => {
  // sending data as variable
  if (err) {
    console.log(err);
    res.locals.error = { message: err.message };
  }
  res.status(err.status || 500).json(res.locals.error);
};

module.exports = {
  errorHandler,
};
