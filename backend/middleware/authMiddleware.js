const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const protect = (req, res, next) => {
  next();
};

module.exports = { protect };
