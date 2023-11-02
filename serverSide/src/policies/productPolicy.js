// Import Joi Validation module
const Joi = require("joi");
const ApiError = require("../utils/ApiError");
const debugJoi = require("debug")("app:joi");

module.exports = {
  // [1] POST Validation
  validateProduct(req, res, next) {
    console.log("req.body in Joi is: ",req.body);
    req.body.products = JSON.parse(req.body.products);
console.log("req.body in Joi is: ",req.body, Array.isArray(req.body.products), typeof req.body.products);

   const schema = Joi.object({
     category: Joi.string().required(),
     newCollection: Joi.string().required(),
     code: Joi.string().required(),
     description: Joi.string().required(),
     urls: Joi.array().items(Joi.string()).allow(null, ""),
      downloadUrls: Joi.array().items(Joi.string()).allow(null, ""),
     onSale: Joi.boolean().required(),
     title: Joi.string().required(),
     products: Joi.array() // id,name,rrp,stock are nested inside products
       .items(
         Joi.object({
           id: Joi.string().required(),
           name: Joi.string().min(3).max(50).required(),
           rrp: Joi.number().required(),
           stock: Joi.number().required(),
         })
       )
       .required(),
   });


    // Return one of two values
    const { error, value } = schema.validate(req.body);

    // ON VALIDATION ERROR: We call Error Middleware & Pass Bad Request with Dynamic Validation Error Message
    if (error) {
      debugJoi(error);
      switch (error.details[0].context.key) {
        case "name":
          next(
            ApiError.badRequest("You must provide a valid name for the product")
          );
          break;

        case "title":
          next(
            ApiError.badRequest(
              "You must provide a valid title for the product"
            )
          );
          break;

        case "newCollection":
          next(
            ApiError.badRequest("You must provide a valid new collection name")
          );
          break;

        case "description":
          next(
            ApiError.badRequest("You must provide a valid product description")
          );
          break;

        case "category":
          next(
            ApiError.badRequest(
              "You must provide a valid category for the product"
            )
          );
          break;

        case "rrp":
          next(
            ApiError.badRequest(
              "You must provide a valid recommended retail price (rrp) for the product"
            )
          );
          break;

        case "stock":
          next(
            ApiError.badRequest(
              "You must provide a valid stock quantity for the product"
            )
          );
          break;

        case "onSale":
          next(
            ApiError.badRequest(
              "You must specify whether the product is on sale"
            )
          );
          break;

        case "image":
          next(
            ApiError.badRequest(
              "The uploaded image is not in a valid format - please re-upload the image"
            )
          );
          break;

        case "urls":
          next(
            ApiError.badRequest(
              "The 'urls' must be an array containing valid strings"
            )
          );
          break;

        default:
          next(
            ApiError.badRequest(
              "Invalid Form Information - please check form information and submit again"
            )
          );
      }
      // ON SUCCSSS: We pass to next middleware
    } else {
      next();
    }
  },
};
