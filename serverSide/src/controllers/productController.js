// Import modules
const { db } = require("../config/db");
const ApiError = require("../utils/ApiError");
// const debugREAD = require("debug")("app:read");
// const debugWRITE = require("debug")("app:write");

module.exports = {
  // [1A] GET ALL Products
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

  //*** */ A generic getProduct function: receive "category" and "collections" as parameters, and return an array of products and a Object of titleInfo(general info)
  async getProduct(req, res, next) {
    try {
      console.log("req.originalUrl is:", req.originalUrl);

      // 使用split方法分割URL路径
      const urlParts = req.originalUrl.split("/");
      // 根据位置获取category和collection
      const category = urlParts[3];
      const collection = urlParts[4];

      console.log("category: ", category, "collection:", collection);
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

  // [1B] GET onSale Products

  // [2] POST Product

  // [3] GET Product BY ID

  // [4] PUT Product BY ID

  // [5] DELETE Product BY ID
};
