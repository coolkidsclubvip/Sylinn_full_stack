const ApiError = require("../utils/ApiError");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
// const debugJwt = require("debug")("app:jwt");

const auth = (req, res, next) => {
  // Load bearer token from header
  let token = req.header("Authorization");

  // 401 error,no token is passed in
  if (!token) {
    return next(ApiError.denyAccess("No token provided"));
  } else {
    token = token.substring(7, token.length);
  }
  // Test whether token is valid
  console.log("@token is:", token);
  try {
    const decoded = jwt.verify(token, config.authentication.jwtSecret);

    req.user = decoded;
    next();
  } catch (err) {
    // catch exception
    return next(ApiError.denyAccess("Invalid token"));
  }
};

const admin = (req, res, next) => {
  //403 error:no admin
  console.log(typeof req.user.isAdmin, req.user.isAdmin);
  if (!req.user.isAdmin) {
    return next(ApiError.forbidden("You must be an admin to proceed"));
  }
  next();
};

const verifyAuth = { auth, admin };

module.exports = verifyAuth;
