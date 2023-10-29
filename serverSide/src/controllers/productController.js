// Import modules
const { db } = require("../config/db");
const ApiError = require("../utils/ApiError");
const {
  storageBucketUpload,
  getFileFromUrl,
  deleteFileFromBucket,
} = require("../utils/bucketServices");
// const debugREAD = require("debug")("app:read");
// const debugWRITE = require("debug")("app:write");

// Function to delete a collection from firestore
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
  async getAllProducts(req, res, next) {
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

            // name: doc.data().name,
            // description: doc.data().description,
            // category: doc.data().category,
            // price: doc.data().price,
            // sizes: doc.data().sizes,
            // texture: doc.data().texture,
            // onSale: doc.data().onSale,
            // isAvailable: doc.data().isAvailable,
            // image: doc.data().image,
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
  async getProduct(req, res, next) {
    try {
      console.log("req.params is:", req.params); //req.params is: { category: 'bath', collection: 'felicity' }
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

  // [2] POST Product
  async postProduct(req, res, next) {
  
    // save to cloud storage
    let imageUrls = [];
    let pdfUrls = [];
    console.log("res.locals.imageNames is:", res.locals.imageNames);
    console.log("*********res.locals.pdfNames is:", res.locals.pdfNames);
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

    // save to firestore
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
        onSale: req.body.onSale,
        title: req.body.title,
        downloadUrls: pdfUrls, // Use the array of PDF URLs
      };

      const titleInfoDoc = collectionRef.doc("titleInfo");
      const response1 = await titleInfoDoc.set(titleInfoData);

      // Handle multiple product variants:
      console.log("req.body is: " + req.body);
      console.log(
        "  req.body.products is:",
        req.body.products,
        Array.isArray(req.body.products)
      );
      if (req.body.products.length > 1) {
        const products = JSON.parse(req.body.products);

        console.log("products is:", products);
        console.log(" products type is:", Array.isArray(products));
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
        console.log(
          "req.body.products只有一个 type is:",
          Array.isArray(req.body.products)
        );
        await collectionRef.doc(req.body.products[0].id).set({
          name: req.body.products[0].name,
          rrp: Number(req.body.products[0].rrp),
          stock: req.body.products[0].stock,
        });
      }

      res.send(`${newCollection} has been Added successfully`);
      return;
    } catch (err) {
      return next(
        ApiError.internalError("Your request could not be saved", err)
      );
    }
  },

  // [3] GET Product BY ID

  // [4] PUT Product BY ID

  // [5] DELETE Product BY ID
  async deleteProductById(req, res, next) {
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

      console.log("titleInfo.urls: " + titleInfo.urls);

      const deletePromises = titleInfo.urls.map(async (url) => {
        const uploadedFile = getFileFromUrl(url); // Replace with your logic to get the file
        console.log("uploadedFile for image: ", uploadedFile);
        return await deleteFileFromBucket(uploadedFile); // Replace with your logic to delete the file
      });

      await Promise.all(deletePromises);
      //2.2 delete the uploaded files(pdf etc.)

      const deleteDownloadPromises = titleInfo.downloadUrls.map(
        async (downloadUrl) => {
          const uploadedFile = getFileFromUrl(downloadUrl); // Replace with your logic to get the file
          console.log("uploadedFile for pdf: ", uploadedFile);
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
