import api from "../services/api";

// MAIN AXIOS PRODUCT METHODS:
// GET ALL - ProductMenu
function getAllCategories() {
  return api.get("/products");
}

// GET PRODUCT BY SEARCH KEYWORD
function getCollectionBySearchKeyword(keyword) {
  return api.get(`/products/search/${keyword}`);
}

// GET ALL COLLETIONS UNDER A CATEGORY
function getAllCollections(category) {
  return api.get(`/products/${category}`);
}

// GET ALL ONSALE - ProductSale
function getOnSaleCollections() {
  return api.get("/products/onsale");
}

// POST - AddProduct
function post(data) {
  console.log("data to be sent to prepareFormData is:", data);
  const formData = prepareFormData(data);
  return api.post("/products", formData, formConfig);
}

// Post - image URL that will be deleted from bucket
function postImageUrl(url, category, collection) {
  return api.post("/products/deleteImage", {
    imageUrl: url,
    category: category,
    collection: collection,
  });
}
// Post - file URL that will be deleted from bucket
function postFileUrl(url, category, collection) {
  return api.post("/products/deleteFile", {
    fileUrl: url,
    category: category,
    collection: collection,
  });
}

// GET BY ID - ProductDetail

// PUT - EditProduct
function put(productData) {
  const formData = prepareFormData(productData);
  console.log("productData in service is:", productData);
  return api.put(
    `/products/edit/${productData.category}/${productData.newCollection}`,
    formData,
    formConfig
  );
}

// DELETE - ProductDetail
function del(category, id) {
  return api.delete(`/products/${category}/${id}`);
}

// get a certain product collection
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

  // Append each URL in data.urls array
  data.urls.forEach((url, index) => {
    formData.append(`urls[${index}]`, url);
  });

  // Append each URL in data.downloadUrls array
  data.downloadUrls.forEach((url, index) => {
    formData.append(`downloadUrls[${index}]`, url);
  });

  formData.append("onSale", data.onSale);
  formData.append("title", data.title);
  console.log("Array.isArray===> data.products", Array.isArray(data.products)); //true
  formData.append("products", JSON.stringify(data.products));
  // formData.append("products", data.products);
  // for PUT requests, and I don't need this
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
  getProduct,
  del,
  postImageUrl,
  postFileUrl,
  put,
  getOnSaleCollections,
  getCollectionBySearchKeyword,
};

export default productService;
