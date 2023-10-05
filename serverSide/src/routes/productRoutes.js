// CENTRAL ROUTE FILE
// Import express and router
const express = require("express");
const router = express.Router();

// Import modules
const ProductController = require("../controllers/productController");

const bathRoutes = require("./bathRoutes");

// Setup routes within export function
module.exports = () => {
  // GET ALL Products
  router.get("/", ProductController.getAllProducts);

  // Get bath felicity
  router.use("/bath", bathRoutes());

  // GET onSALE Products

  // POST Product

  // GET BY ID Product

  // UPDATE BY ID Product

  // DELETE BY ID Product

  return router;
};
