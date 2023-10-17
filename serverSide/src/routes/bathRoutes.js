// CENTRAL ROUTE FILE
// Import express and router
const express = require("express");
const router = express.Router();

// Import modules
const BathController = require("../controllers/bathController");
const ProductController = require("../controllers/productController");

// Setup routes within export function
module.exports = () => {
  // GET ALL Products
  // router.get("/felicity", BathController.getFelicity);
  router.get("/felicity", ProductController.getProduct)

  // GET SEAL 


  // GET OTTER



  return router;
};
