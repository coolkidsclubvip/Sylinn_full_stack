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
  console.log("data to be sent to prepareFormData is:", data);
  const formData = prepareFormData(data);
  return api.post("/products", formData, formConfig);
}

// GET BY ID - ProductDetail

// PUT - EditProduct

// DELETE - ProductDetail
function del(category, id) {
  return api.delete(`/products/${category}/${id}`);
}

// get all products under /bath/felicity

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

  // formData.append("urls", data.urls);
  // console.log("$$$$$data.urls in formdata:", data.urls);
  // formData.append("downloadUrls", data.downloadUrls);
  // console.log("$$$$$data.downloadUrls in formdata::",Array.isArray(data.downloadUrls) );

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

  // Append each variant in data.products array,different as urls or DownloadUrls, as there are objects inside its array
  // for (let index = 0; index < data.products.length; index++) {
  //   const product = data.products[index];
  //   formData.append(`products[${index}][name]`, product.name);
  //   formData.append(`products[${index}][rrp]`, product.rrp);
  //   formData.append(`products[${index}][stock]`, product.stock);
  // }
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
  getProduct,
  del,
};

export default productService;
