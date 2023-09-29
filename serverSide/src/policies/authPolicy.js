const Joi = require("joi");
const ApiError = require("../utils/ApiError");
const debugJoi = require("debug")("api:joi");

module.exports = {
  validateRegister(req, res, next) {
    // 1. set Joi schema
    debugJoi(req.body); //debugJoi 函数用于调试验证前的数据，以便更好地理解和排查验证问题。一旦开发者确认数据正确，就可以继续执行 Joi 模式验证。

    const schema = Joi.object({
      username: Joi.string().alphanum().min(3).max(30),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
        isAdmin: Joi.boolean(),
    });

    // 2. call Joi validation method on req.body
    const { error, value } = schema.validate(req.body);
    console.log("error is: ",error);
    // 3. when error, test the error type
    if (error) {
      debugJoi(error.details[0]);
      switch (error.details[0].context.key) {
        case "username":
          next(ApiError.badRequest("Please enter a valid username"));
          break;
        case "email":
          next(ApiError.badRequest("Please enter a valid email"));
          break;
        case "password":
          next(ApiError.badRequest("Please enter a valid password"));
          break;
        default:
          next(ApiError.internalError("Invalid form information"));
          break;
      }
    }
    // ON SUCCSSS: We pass to next middleware
    else {
      next();
    }
  },

  validateLogin(req, res, next) {
    debugJoi(req.body);

    const schema = Joi.object({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });
    // call Joi validation method on req.body
    const { error, value } = schema.validate(req.body);
    if (error) {
      debugJoi(error);
      switch (error.details[0].context.key) {
        case "email":
          next(ApiError.badRequest("Please enter a valid email"));
          break;
        case "password":
          next(ApiError.badRequest("Please enter a valid password"));
          break;
        default:
          next(ApiError.internalError("Invalid form information"));
          break;
      }
    } else {
      next();
    }
  },
};
