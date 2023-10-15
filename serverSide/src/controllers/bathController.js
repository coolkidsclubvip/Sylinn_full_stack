// Import modules
const { db } = require("../config/db");
const ApiError = require("../utils/ApiError");
// const debugREAD = require("debug")("app:read");
// const debugWRITE = require("debug")("app:write");

module.exports = {
  // [1A] GET ALL Products
  async getFelicity(req, res, next) {
    try {
      // Store the collection reference in variable
      const productRef = db.collection("products");
      // Fetch ALL Currencies and store response in "snapshot"
      const snapshot = await productRef
        .doc("bath")
        .collection("felicity")
        .get();

      // [400 ERROR] Check for User Asking for Non-Existent Documents
      if (snapshot.empty) {
        return next(
          ApiError.badRequest("The items you were looking for do not exist")
        );

        // SUCCESS: Push object properties to array and send to client
      } else {
        let docs = [];
        snapshot.forEach((doc) => {
          // get data from felicity
          const data = doc.data();

          docs.push({
            id: doc.id,
            ...data // a simpler way than below
            // name: data.name,
            // rrp: data.rrp,
            // onSale: data.onSale,
            // stock: data.stock,
            // url: data.url,
            // url2: data.url2,
          });
        });
        console.log("docs are:",docs);
        res.send(docs);
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
