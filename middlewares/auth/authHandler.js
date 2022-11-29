// external imports
const jwt = require('jsonwebtoken');

// internal imports
const User = require('../../models/User');

// verifying token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (!authHeader) {
    return res
      .status(401)
      .send({ message: 'Access to this route is unauthorized' });
  }
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .send({ message: 'Access to this route is forbidden' });
    }
    req.decoded = decoded;
    console.log('decoded ', decoded);
    console.log('Auth header ', authHeader);
    next();
  });
};

// verifying admin
const verifyAdmin = async (req, res, next) => {
  const requestedEmail = req.decoded.email;
  const requestedAccount = await User({
    email: requestedEmail,
  });
  if (requestedAccount?.isAdmin === true) {
    next();
  } else {
    res.status(403).send({
      message: 'Request to the this route is not accessible and deniable',
    });
  }
};

// exporting modules
module.exports = {
  verifyToken,
  verifyAdmin,
};
