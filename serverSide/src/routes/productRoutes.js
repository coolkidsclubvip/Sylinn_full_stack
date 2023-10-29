// CENTRAL ROUTE FILE
// Import express and router
const express = require("express");
const router = express.Router();

// Import modules
const ProductController = require("../controllers/productController");
const fileServerUpload = require("../middleware/fileServerUpload");
const productPolicy = require("../policies/productPolicy");
const filePolicy = require("../policies/filePolicy");
const verifyAuth = require("../middleware/verifyAuth");



// Setup routes within export function
module.exports = () => {
  // GET ALL Products
  router.get("/", ProductController.getAllProducts);


  // GET a certain product collection under a certain category;
  router.get("/:category/:collection", ProductController.getProduct);

  // Get ALL Collections under a certain category
   router.get("/:category", ProductController.getCollections);

  // GET onSALE Products

  // POST Product
  router.post(
    "/",
   
    // verifyAuth.auth,
    // verifyAuth.admin,
    // productPolicy.validateProduct,// this is Joi validation
    // filePolicy.filePayloadExists,
    // filePolicy.fileSizeLimiter,
    // filePolicy.fileExtensionLimiter([".png", ".jpg", ".jpeg", ".avif",".gif"]),
    fileServerUpload, // use[] array brackets ensures process order
    ProductController.postProduct
  );

  // GET BY ID Product
  // router.get("/:id", ProductController.getProductById);

  // UPDATE BY ID Product

  // DELETE BY ID Product
  router.delete("/:category/:id", [verifyAuth.auth,
  verifyAuth.admin],
  ProductController.deleteProductById); 




  return router;
};
