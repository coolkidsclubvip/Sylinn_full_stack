import api from "../services/api";

// MAIN AXIOS PRODUCT METHODS:
// GET ALL - ProductMenu
function getAllCategories() {
  return api.get("/products");
}

// GET ALL COLLETIONS UNDER A CATEGORY
function getAllCollections(category) {
  return api.get(`/products/${category}`);
}

// GET ALL ONSALE - ProductSale

// POST - AddProduct
function post(data) {
  const formData = prepareFormData(data);

  return api.post("/products", formData, formConfig);
}

// GET BY ID - ProductDetail

// PUT - EditProduct

// DELETE - ProductDetail

// get all products under /bath/felicity

// function getFelicity() {
function getProduct(category, collection) {
  return api.get(`/products/${category}/${collection}`);
}

// 1.set content header to multipart form data
const formConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
//2. format the mixed dta that the form state provides
function prepareFormData(data, uploadedfile) {
  let formData = new FormData();

  // Append reconfigured mixed data to new object
  formData.append("category", data.category);
  formData.append("newCollection", data.newCollection);
  formData.append("code", data.code);

  formData.append("description", data.description);

  formData.append("urls", data.urls);
  console.log("urls:", data.urls);
  formData.append("downloadUrls", data.downloadUrls);
  console.log("data.downloadUrls:", data.downloadUrls);
  formData.append("onSale", data.onSale);
  formData.append("title", data.title);
  console.log("Array.isArray===> data.products", Array.isArray(data.products)); //true
  formData.append("products", JSON.stringify(data.products));

  // Append data from the products array
  // data.products.forEach((product, index) => {// Append each product's properties individually
  //   formData.append(`products[${index}][id]`, product.id),
  //   formData.append(`products[${index}][name]`, product.name),
  //   formData.append(`products[${index}][rrp]`, product.rrp),
  //   formData.append(`products[${index}][stock]`, product.stock)

  // });

  console.log("formData is 1:", formData);
  // for PUT requests:
  if (uploadedfile) {
    formData.append("uploadedFile", uploadedfile);
  }
  return formData;
}

// pack up all Product services
const productService = {
  getAllCategories,
  getAllCollections,
  post,
  // getFelicity,
  getProduct,
};

export default productService;
