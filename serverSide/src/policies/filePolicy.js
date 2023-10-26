// not JOI but my own custom policy
const ApiError = require("../utils/ApiError");
const path = require("path");

// 1. check file exists
const filePayloadExists = (req, res, next) => {
  if (!req.files && !req.body.uploadFile) {
    return next(new ApiError("No file uploaded!"));
  }
   next();
};

// 2. check file size
const fileSizeLimiter = (req, res, next) => {
  const MB = 5; // no image bigger than 5MB is allowed
  const FILE_SIZE_LIMIT = MB * 1024 * 1024;

  if (req.files) {
    console.log("req.files: " , req.files);
    const file = req.files.urls.size;
    if (file.size > FILE_SIZE_LIMIT) {
      return next(ApiError.tooLarge(`File size limit ${MB}MB exceeded`));
    }
  }
  next();
};

// 3. check file extension
const fileExtensionLimiter = (allowedExtensionArray) => {
  return (req, res, next) => {
    if (req.files) {
      const file = req.files.urls;
      const fileExtension = path.extname(file.name);
      const allowed = allowedExtensionArray.includes(fileExtension);
      if (!allowed) {
        return next(
          ApiError.cannotProcess(
            `Not allowed file type, Only ${allowedExtensionArray.toString()} allowed`
          )
        );
      }
    }

    next();
  };
};

// export all fucntions as filePolicy
 const filePolicy = {
     filePayloadExists,
     fileSizeLimiter,
     fileExtensionLimiter,
}


module.exports =filePolicy;