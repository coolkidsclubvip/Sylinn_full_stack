// import external libraries
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

//  import internal libraries
const config = require("./config/config");
const routes = require("./routes/routes");
const { dbPing } = require("./config/db");
const ApiError = require("./utils/ApiError");
const ApiErrorHandler = require("./middleware/ApiErrorHandler");

// // dev debug console logs
const debugStartup = require("debug")("app:startup");

//initialize application using express
const app = express();
// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
debugStartup("Parsing middleware enabled on all routes");
app.use(morgan("dev"));

// route handlers
app.use("/api", routes());

// Error handlers:
app.use((req, res, next) => {
  next(ApiError.notFound()); // "send us to the next middleware"
  //   next(err)
});
app.use(ApiErrorHandler);

// Ping DB & Set Port
dbPing.then(() => {
  app.listen(config.port, () =>
    console.log(`Server is running on port: ${config.port}`)
  );
});
