const express = require("express");
const routes = require("./routes/routes");
const morgan = require("morgan");
const app = express();
const ApiError = require("./utils/ApiError");
const apiErrorHandler = require("./utils/ApiErrorHandler");

//express middleware
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
app.use(apiErrorHandler());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
