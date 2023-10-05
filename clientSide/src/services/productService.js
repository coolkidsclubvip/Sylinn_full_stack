import api from "../services/api";

// MAIN AXIOS PRODUCT METHODS:
// GET ALL - ProductMenu
function getAll() {
  return api.get("/api/products");
}
// GET ALL ONSALE - ProductSale

// POST - AddProduct

// GET BY ID - ProductDetail

// PUT - EditProduct

// DELETE - ProductDetail

function getFelicity(){
      return api.get("/products/bath/felicity");
}

const productService = {
  getAll,
  getFelicity,
};

export default productService;
