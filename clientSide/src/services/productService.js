import api from "../services/api";

// MAIN AXIOS PRODUCT METHODS:
// GET ALL - ProductMenu
function getAll() {
  return api.get("/api/products");
}
// GET ALL ONSALE - ProductSale

// POST - AddProduct
function post(data) {
  const formData = prepareFormData(data);
  return api.post("/api/products", formData, formConfig);
}

// GET BY ID - ProductDetail

// PUT - EditProduct

// DELETE - ProductDetail

// get all products under /bath/felicity

function getFelicity() {
  return api.get("/products/bath/felicity");
}

// 1.set content header to multipart form data
const formConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
//2. format the mixed dta that the form state provides
function prepareFormData() {
  let formData = new FormData();

  // Append reconfigured mixed data to new object 要改这里
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("category", data.category);
  formData.append("price", data.price);
  formData.append("sizes", data.sizes);
  formData.append("texture", data.texture);
  formData.append("onSale", data.onSale);
  formData.append("isAvailable", data.isAvailable);
  formData.append("image", data.image);
  if (uploadedfile) {
    formData.append("uploadedFile", uploadedfile);
  }
  return formData;
}

// pack up all Product services
const productService = {
  getAll,
  post,
  getFelicity,
};

export default productService;
