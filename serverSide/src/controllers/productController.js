// Import modules
const { db } = require("../config/db");
const ApiError = require("../utils/ApiError");
const bucketServices = require("../utils/bucketServices");
const {
  storageBucketUpload,
  getFileFromUrl,
  deleteFileFromBucket,
} = require("../utils/bucketServices");

// Function to delete a collection from firestore, to be called in deleteCollectionById
async function deleteCollection(collectionPath) {
  const collectionRef = db.collection(collectionPath);
  const batch = db.batch();

  // Get all documents in the collection
  const querySnapshot = await collectionRef.get();

  querySnapshot.forEach((doc) => {
    const docRef = db.collection(collectionPath).doc(doc.id);
    batch.delete(docRef);
  });

  // Commit the batch
  await batch.commit();
}

module.exports = {
  ////// [1A]  GET ALL Products
  async getAllCategories(req, res, next) {
    try {
      // Store the collection reference in variable
      const productRef = db.collection("products");
      // Fetch ALL Currencies and store response in "snapshot"
      const snapshot = await productRef.get();

      // [400 ERROR] Check for User Asking for Non-Existent Documents
      if (snapshot.empty) {
        return next(
          ApiError.badRequest("The items you were looking for do not exist")
        );

        // SUCCESS: Push object properties to array and send to client
      } else {
        let docs = [];
        snapshot.forEach((doc) => {
          docs.push({
            id: doc.id, //  只显示： [{"id":"acc"},{"id":"bath"},{"id":"grate"},{"id":"htr"},{"id":"led"},{"id":"sink"}]
          });
        });
        res.send(docs);
      }
      // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch (err) {
      return next(
        ApiError.internalError("The items selected could not be found", err)
      );
    }
  },

  ////// [1B]  Get all collections under a given category
  async getCollections(req, res, next) {
    try {
      //req.params is:
      const category = req.params.category;

      if (!category) {
        return next(ApiError.badRequest("Invalid Category"));
      }

      const productRef = db.collection("products").doc(category);
      const snapshot = await productRef.listCollections();

      const titleInfoDocs = [];
      // Get titleInfos for all collections under this category
      for (const collection of snapshot) {
        const titleInfoDoc = await collection.doc("titleInfo").get();
        if (titleInfoDoc.exists) {
          titleInfoDocs.push({
            collectionId: collection.id,
            titleInfo: titleInfoDoc.data(),
          });
        }
      }
      res.send(titleInfoDocs);

      // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch (err) {
      return next(
        ApiError.internalError("The items selected could not be found", err)
      );
    }
  },

  ////// [1C]  A generic getProduct function: receive "category" and "collections" as parameters, and return an array of products and a Object of titleInfo(general info)
  async getCollection(req, res, next) {
    try {
    
      const category = req.params.category;
      const collection = req.params.collection;

      if (!category || !collection) {
        return next(
          ApiError.badRequest("Category and collection are required")
        );
      }

      // Store the collection reference in variable
      const productRef = db.collection("products");
      // Fetch ALL Currencies and store response in "snapshot"
      const snapshot = await productRef
        .doc(category)
        .collection(collection)
        .get();

      // [400 ERROR] Check for User Asking for Non-Existent Documents
      if (snapshot.empty) {
        return next(
          ApiError.badRequest("The items you were looking for do not exist")
        );

        // SUCCESS: Push object properties to array and send to client
      } else {
        let docs = [];
        let titleInfo = null;

        snapshot.forEach((doc) => {
          // Get data from felicity
          const data = doc.data();
          if (doc.id === "titleInfo") {
            titleInfo = {
              id: doc.id,
              ...data,
            };
          } else {
            docs.push({
              id: doc.id,
              ...data,
            });
          }
        });

        // Send docs and titleInfo to the client
        res.send({ docs: docs, titleInfo: titleInfo });
      }
      // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch (err) {
      return next(
        ApiError.internalError("The items selected could not be found", err)
      );
    }
  },

  ////// [1D] GET onSale Products
  async getOnSaleCollections(req, res, next) {
    try {
      // Get all categories
      const productRef = db.collection("products");
      const snapshot = await productRef.get();
      let categories = [];
      snapshot.forEach((doc) => {
        categories.push({
          id: doc.id, //    [{"id":"acc"},{"id":"bath"},{"id":"grate"},{"id":"htr"},{"id":"led"},{"id":"sink"}]
        });
      });

      const titleInfos = [];

      await Promise.all(
        categories.map(async (category) => {
          // Make originalCategory to be pushed into titleInfos array later
          const originalCategory = category.id;

          const categoryRef = productRef.doc(category.id);
          const snapshot = await categoryRef.listCollections();

          // Get titleInfos for all collections under this category
          for (const collection of snapshot) {
            const originalCollection = collection.id;

            const titleInfoDoc = collection.doc("titleInfo");

            // Add a query to filter documents where onSale is true
            const titleInfoSnapshot = await titleInfoDoc.get(); // 获取 titleInfo 文档

            // Check whether the query results contain documents that meet the criteria
            if (titleInfoSnapshot.exists) {
              const titleInfoData = titleInfoSnapshot.data();

              // Check titleInfoData  onSale property, for both boolean and string types
              if (
                titleInfoData.onSale === true ||
                titleInfoData.onSale === "true"
              ) {
                titleInfos.push({
                  category: originalCategory,
                  collection: originalCollection, // Add the category property
                  titleInfo: titleInfoData,
                });
              }
            }
          }
          return;
        })
      );

      // Sort titleInfos alphabetically
      titleInfos.sort((a, b) => {
        const categoryA = a.category.toLowerCase();
        const categoryB = b.category.toLowerCase();

        if (categoryA < categoryB) {
          return -1;
        }
        if (categoryA > categoryB) {
          return 1;
        }
        return 0;
      });

      res.send(titleInfos);
    } catch (err) {
      return next(
        ApiError.internalError("The items selected could not be found", err)
      );
    }
  },

  // [2] POST Product
  async postProduct(req, res, next) {
    // save to cloud storage
    let imageUrls = [];
    let pdfUrls = [];
 
  

    try {
      for (const imageName of res.locals.imageNames) {
        const imageUrl = await storageBucketUpload(imageName);
        imageUrls.push(imageUrl);
      }

      for (const pdfName of res.locals.pdfNames) {
        const pdfUrl = await storageBucketUpload(pdfName);
        pdfUrls.push(pdfUrl);
      }
    } catch (err) {
      return next(
        ApiError.internalError(
          "An error occurred when uploading image to cloud storage",
          err
        )
      );
    }

    // Create collection Ref oject
    try {
      const category = req.body.category;
      const newCollection = req.body.newCollection;
      const productRef = db.collection("products");
      const collectionRef = productRef.doc(category).collection(newCollection);

      // Handle titleInfo
      const titleInfoData = {
        code: req.body.code,
        description: req.body.description,
        urls: imageUrls, // Use the array of image URLs
        downloadUrls: pdfUrls, // Use the array of PDF URLs
        onSale: req.body.onSale,
        title: req.body.title,
      };

      const titleInfoDoc = collectionRef.doc("titleInfo");
      const response1 = await titleInfoDoc.set(titleInfoData);

    
      // Handle multiple product variants:
      if (req.body.products.length > 1) {
        const products = req.body.products;

        const productsPromises = products.map(async (product) => {
          const productDoc = collectionRef.doc(product.id);
          await productDoc.set({
            name: product.name,
            rrp: Number(product.rrp),
            stock: product.stock,
          });
        });

        await Promise.all(productsPromises);

        //Handle only 1 product without any variant
      } else if (req.body.products.length == 1) {
        // Handle single product, no other options:

        await collectionRef.doc(req.body.products[0].id).set({
          name: req.body.products[0].name,
          rrp: Number(req.body.products[0].rrp),
          stock: req.body.products[0].stock,
        });
      }

      res.send(`${newCollection} has been added successfully`);
      return;
    } catch (err) {
      return next(
        ApiError.internalError("Your request could not be processed", err)
      );
    }
  },

  // [3] GET Product BY KEYWORD OR CODE

  async getProductByKeyword(req, res, next) {
    // What we need to fill up with filtered titleInfos
    let titleInfoDocs = [];
    let filteredTitleInfoDocs = [];
    let filteredTitleInfoDocsByCode=[]
    try {
      // Get all categories
      const productRef = db.collection("products");
      // Fetch ALL Currencies and store response in "snapshot"
      const ProductSnapshot = await productRef.get();

      let categories = [];
      ProductSnapshot.forEach(async (doc) => {
        categories.push({
          id: doc.id, //  只显示： [{"id":"acc"},{"id":"bath"},{"id":"grate"},{"id":"htr"},{"id":"led"},{"id":"sink"}]
        });
      });
    

      // Get all titleInfos from all collections//

      await Promise.all(
        categories.map(async (category) => {
          const categoryRef = productRef.doc(category.id);
          const snapshot = await categoryRef.listCollections();
          const originalCategory = category.id;
          // Get titleInfos for all collections under this category
          for (const collection of snapshot) {
            const titleInfoDoc = await collection.doc("titleInfo").get();
            if (titleInfoDoc.exists) {
              titleInfoDocs.push({
                category: originalCategory,
                collectionId: collection.id,
                titleInfo: titleInfoDoc.data(),
              });
            }
          }
          // Filter for all collections with keywords
          const keyword = req.params.keyword;
       
          // Convert the keyword to a case-insensitive regex
          const keywordRegex = new RegExp(`\\b${keyword}\\b`, "i");
          filteredTitleInfoDocs = titleInfoDocs.filter((item) => {
            //  item.collectionId.titleInfo.includes(keywordRegex);
            return keywordRegex.test(item.titleInfo.title);
          });
        })
      );
    } catch (err) {
      console.log(err);
      return next(
        ApiError.badRequest("Failed to search a product with keyword", err)
      );
    }

    // If no yields no product,move on to the next Search By Code
    if (filteredTitleInfoDocs.length == 0) {
      ////[3.5]GET Product BY code

      try {
     

        // Filter for all collections with possible code
        const keyword = req.params.keyword;
     
        // Convert the keyword to a case-insensitive regex
        const keywordRegex = new RegExp(keyword, "i");
       await Promise.all( filteredTitleInfoDocsByCode = titleInfoDocs.filter((item) => {
          //  item.collectionId.titleInfo.includes(keywordRegex);
          return keywordRegex.test(item.titleInfo.code);
        }))
      } catch (err) {
        console.log(err);
      }

      res.send(filteredTitleInfoDocsByCode);
    } else {
      res.send(filteredTitleInfoDocs);
    }
  },

  // [4]] PUT Product BY Collection
  async putProductByCollection(req, res, next) {
    // Images and files to be saved to cloud storage
    let imageUrls = [];
    let pdfUrls = [];

    try {
      if (res.locals.imageNames) {
        for (const imageName of res.locals.imageNames) {
          const imageUrl = await storageBucketUpload(imageName);
          imageUrls.push(imageUrl);
        }
      }

      if (res.locals.pdfNames)
        for (const pdfName of res.locals.pdfNames) {
          const pdfUrl = await storageBucketUpload(pdfName);
          pdfUrls.push(pdfUrl);
        }
    } catch (err) {
      return next(
        ApiError.internalError(
          "An error occurred when uploading image to cloud storage",
          err
        )
      );
    }

    // Create collection Ref oject
    try {
      const category = req.body.category;
      const newCollection = req.body.newCollection;
      const productRef = db.collection("products");
      const collectionRef = productRef.doc(category).collection(newCollection);
      const titleInfoDoc = collectionRef.doc("titleInfo");

      // Get existing urls and downloadUrls
      const snapshot = await collectionRef.get();
      let titleInfo = null;
      const existingProducts = [];
      snapshot.forEach((doc) => {
        // Get data
        const data = doc.data();
        if (doc.id === "titleInfo") {
          titleInfo = {
            id: "titleInfo",
            ...data,
          };
        } else {
          existingProducts.push({ id: doc.id, data }); // Assuming each doc in the collection represents a product
        }
      });

      //Check whether titleInfo.downloadUrls is an array, if not, set it to an empty array(Allow no file)
      if (!Array.isArray(titleInfo.downloadUrls)) {
        titleInfo.downloadUrls = [];
      }
      // Same for the image (Allow no image)
      if (!Array.isArray(titleInfo.urls)) {
        titleInfo.urls = [];
      }
      // Handle titleInfo
      const updatedTitleInfo = {
        code: req.body.code,
        description: req.body.description,
        urls: [...titleInfo.urls, ...imageUrls], // Append new imageUrls
        downloadUrls: [...titleInfo.downloadUrls, ...pdfUrls], // Append new pdfUrls
        onSale: req.body.onSale,
        title: req.body.title,
      };

      const response1 = await titleInfoDoc.update(updatedTitleInfo);

      // Push newly created products into newProducts array
      const reqProducts = req.body.products;
      const newProducts = [];

      for (const product of reqProducts) {
        const foundProduct = existingProducts.find(
          (existingProduct) => existingProduct.id === product.id
        );
        if (!foundProduct) {
          newProducts.push(product);
        }
      }
     
      // Merge new and existing products into a common array
      const allProducts = [...existingProducts, ...newProducts];
     

      // Delete products that are in the database but not in reqProducts

      const deletePromises = existingProducts
        .filter(
          (existingProduct) =>
            !reqProducts.some((product) => product.id === existingProduct.id)
        ) //如果 !allProducts.some(product => product.id === existingProduct.id) 返回 true，表示这个 existingProduct 不在 allProducts 中。
        .map(async (product) => {
          
          const productDoc = collectionRef.doc(product.id);
          try {
            await productDoc.delete();

            //update allproducts here
            // const idx = allProducts.indexOf(product.id);
            // const obj = allProducts.splice(idx, 1);
          } catch (error) {
            res.send("error deleting product:", error);
          }
        });

      await Promise.all(deletePromises);

      // Update or create product
      const productsPromises = reqProducts.map(async (product) => {
        const productDoc = collectionRef.doc(product.id);
        await productDoc.set({
          id: product.id,
          name: product.name,
          rrp: Number(product.rrp),
          stock: product.stock,
        });
      });

      await Promise.all(productsPromises);

      res.send("Product has been updated successfully");
    } catch (err) {
      return next(
        ApiError.internalError(
          "Your request could not be processed at this time",
          err
        )
      );
    }
  },

  // [4.1.1] Delete product image by ID
  async deleteProductImage(req, res, next) {
    try {
      // Get name from URL
      const imageName = await bucketServices.getFileFromUrl(req.body.imageUrl);

      // Delete image URL from Firestore titleInfo urls array
      const category = req.body.category;
      const collection = req.body.collection;
      const docPath = `products/${category}`;
      const urlToDelete = req.body.imageUrl;
      const admin = require("firebase-admin");
      const productRef = db.collection("products");

      const snapshot = await productRef
        .doc(category)
        .collection(collection)
        .get();
      snapshot.forEach((doc) => {
        // Get data from collection
        const data = doc.data();
        if (doc.id === "titleInfo") {
          const titleInfo = doc.data();
          const urls = titleInfo.urls || []; // Get the urls array, or an empty array if it does not exist

          // Find and delete matching url
          const updatedUrls = urls.filter((url) => url !== urlToDelete);

          // Update the titleInfo.urls field using the update method
          productRef
            .doc(category)
            .collection(collection)
            .doc("titleInfo")
            .update({
              urls: updatedUrls,
            })
            .then(() => {
              console.log(
                `URL ${urlToDelete} has been deleted from cloud storage`
              );
            })
            .catch((error) => {
              console.error(error);
              res.status(500).send("Error occurs when deleting image");
            });
        }
      });
      res.send(`Image ${imageName} has been deleted successfully`);
    } catch (err) {
      console.log(err);
    }
  },

  // [4.1.2] Delete product file by ID
  async deleteProductFile(req, res, next) {
    try {
      // Get name from URL
      const imageName = await bucketServices.getFileFromUrl(req.body.fileUrl);

      // Delete image URL from Firestore titleInfo urls array
      const category = req.body.category;
      const collection = req.body.collection;
      const docPath = `products/${category}`;
      const urlToDelete = req.body.fileUrl;
      const admin = require("firebase-admin");
      const productRef = db.collection("products");

      const snapshot = await productRef
        .doc(category)
        .collection(collection)
        .get();
      snapshot.forEach((doc) => {
        // Get data from collection
        const data = doc.data();
        if (doc.id === "titleInfo") {
          const titleInfo = doc.data();
          const urls = titleInfo.downloadUrls || []; // Get the urls array, or an empty array if it does not exist

          // Find and delete matching url
          const updatedUrls = urls.filter((url) => url !== urlToDelete);

          // Update the titleInfo.urls field using the update method
          productRef
            .doc(category)
            .collection(collection)
            .doc("titleInfo")
            .update({
              downloadUrls: updatedUrls,
            })
            .then(() => {
              console.log(
                `URL ${urlToDelete} has been deleted from cloud storage`
              );
            })
            .catch((error) => {
              console.error(error);
              res.status(500).send("Error occurs when deleting image");
            });
        }
      });
      res.send(`Image ${imageName} has been deleted successfully`);
    } catch (err) {
      console.log(err);
    }
  },

  // [5] DELETE collection BY ID
  async deleteCollectionById(req, res, next) {
    try {
      // 1.Check document existence with matching id
      const productRef = db
        .collection("products")
        .doc(`${req.params.category}`)
        .collection(`${req.params.id}`);
      const snapshot = await productRef.get();
      // 2. Queue the deletion of files
      // 2.1 Delete the image files
      let titleInfo = null;
      snapshot.forEach((doc) => {
        // Get data
        const data = doc.data();
        if (doc.id === "titleInfo") {
          titleInfo = {
            id: "titleInfo",
            ...data,
          };
        }
      });

      const deletePromises = titleInfo.urls.map(async (url) => {
        const uploadedFile = getFileFromUrl(url); // Replace with your logic to get the file
      
        return await deleteFileFromBucket(uploadedFile); // Replace with your logic to delete the file
      });

      await Promise.all(deletePromises);
      //2.2 delete the uploaded files(pdf etc.)

      const deleteDownloadPromises = titleInfo.downloadUrls.map(
        async (downloadUrl) => {
          const uploadedFile = getFileFromUrl(downloadUrl); // Replace with your logic to get the file

          return await deleteFileFromBucket(uploadedFile); // Replace with your logic to delete the file
        }
      );

      await Promise.all(deleteDownloadPromises);
      // 3. Delete the document from Firestore
      // await productRef.delete({ exists: true }); //precondition: to delete the document only when it exists
      await deleteCollection(
        `products/${req.params.category}/${req.params.id}`
      );
      res.send("Product and associated files deleted successfully");
    } catch (err) {
      return next(
        ApiError.internalError("Your request can not be processed", err)
      );
    }
  },
};
