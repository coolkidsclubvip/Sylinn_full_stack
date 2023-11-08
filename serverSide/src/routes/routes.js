const express = require("express");
const router = express.Router();
//import sub routes
const authRoutes = require("./authRoutes");
const productRoutes = require("./productRoutes"); //引入新建立的产品routes
const productController = require("../controllers/productController");
module.exports = () => {
  // Home:
  router.get("/", (req, res, next) => {
    res.send("welcome to Sylinn API index");
  });

  ////////////////test endpoinst for assignment only//////////
  router.get("/toilet", productController.getToilet);
  ////////////////test endpoinst for assignment only//////////
  // sub-routes:
  router.use("/auth", authRoutes());
  // product route:
  router.use("/products", productRoutes());
  // sEAR

  return router;
};
