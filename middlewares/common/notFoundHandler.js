// 404 error handler
const notFoundHandler = (req, res, next) => {
  res.status(404).json({ message: 'Requested route not found!' });
  next();
};

// exporting modules
module.exports = {
  notFoundHandler,
};
