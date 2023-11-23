// import external libraries
const express = require("express");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");// it detect any file upload and store them in req.files
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

//  import internal libraries
const config = require("./config/config");
const routes = require("./routes/routes");
const { dbPing } = require("./config/db");
const ApiError = require("./utils/ApiError");
const apiErrorHandler = require("./middleware/apiErrorHandler");
const corsOptions = require("./config/corsOptions");

// // dev debug console logs
const debugStartup = require("debug")("app:startup");

//initialize application using express
const app = express();
// CORS & HTTP HEADER SETTER
app.use(helmet());
app.use(cors({ origin: "*" })); // default origin, available to any visitor
// app.use(cors(corsOptions))

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
debugStartup("Parsing middleware enabled on all routes");

// File parsing middleware
// app.use(fileUpload({ createParentPath: true })); // allow upload a file to the local server
app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(morgan("dev"));

// route handlers
app.use("/api", routes());

// Error handlers:
app.use((req, res, next) => {
  next(ApiError.notFound()); // "send us to the next middleware"

});
app.use(apiErrorHandler);

// Ping DB & Set Port
// dbPing.then(() => {
  app.listen(config.port, () =>
    console.log(`Server is running on port: ${config.port}`)
  );
// });
