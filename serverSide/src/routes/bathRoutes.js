// CENTRAL ROUTE FILE
// Import express and router
const express = require("express");
const router = express.Router();

// Import modules
const BathController = require("../controllers/bathController");

// Setup routes within export function
module.exports = () => {
  // GET ALL Products
  router.get("/felicity", BathController.getFelicity);

  // GET SEAL 


  // GET OTTER



  return router;
};
