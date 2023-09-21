const express = require("express");
const routes = require("./routes/routes");
require("dotenv").config();
const config = require("./config/config");
const morgan = require("morgan");
const app = express();
const ApiError = require("./utils/ApiError");
const ApiErrorHandler = require("./middleware/ApiErrorHandler");

// // dev debug console logs
// const debugStartup = require('debug')('app:startup')

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));


// route handlers
app.use("/api", routes());

// Error handlers:
app.use((req, res, next) => {
  next(ApiError.notFound()); // "send us to the next middleware"
  //   next(err)
});
app.use(ApiErrorHandler);


app.listen(config.port, () => {
  console.log(`Server is running on port:${config.port}`);
});
  