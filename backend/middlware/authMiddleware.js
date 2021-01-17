const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
  // next included as this is middleware

  let token;

  if (
    //   Check token exists and is a bearr token
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Remove token from bearer token
      token = req.headers.authorization.split(' ')[1];

      //   Get encrypted id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //   Get user details minus the password
      req.user = await User.findById(decoded.id).select('-password');
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not Authorised. Token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorised. No Token');
  }

  next();
});
module.exports = protect;
