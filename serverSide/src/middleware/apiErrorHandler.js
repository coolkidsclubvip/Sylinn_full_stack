const ApiError = require("../utils/ApiError");

function apiErrorHandler(err, req, res, next) {
  // known error
  if (err instanceof ApiError) {
    res.status(err.code).json(err.message);
    return;

    // unknown error
  } else {
    console.error(err);
    res
      .status(500)
      .json({ message: "Something went wrong, Please try again later" });
  }
}

module.exports = apiErrorHandler;
