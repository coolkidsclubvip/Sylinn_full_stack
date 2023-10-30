// Not JOI but my own custom policy
const ApiError = require("../utils/ApiError");
const path = require("path");

// 1. Check file exists
const filePayloadExists = (req, res, next) => {
  console.log("req.body is: ", req.body);
  if (!req.files && !req.body.uploadFile) {
    return next(new ApiError("No file uploaded!"));
  }
  // if (!req.body.urls && !req.body.downloadUrls) {
  //   return next(new ApiError("No file uploaded!"));
  // }
  next();
};

// 2. Check file size
const fileSizeLimiter = (req, res, next) => {
  const MB = 5; // no image bigger than 5MB is allowed
  const FILE_SIZE_LIMIT = MB * 1024 * 1024;

  if (req.files) {
    const filesArray = Object.values(req.files);
    filesArray.map((file) => {
      if (file.size > FILE_SIZE_LIMIT) {
        return next(ApiError.tooLarge(`File size limit ${MB}MB exceeded`));
      }
    });
  }
  next();
};

// 3. Check file extension
const fileExtensionLimiter = (allowedExtArray) => {
  return (req, res, next) => {
    if (req.files) {
      for (const fieldName in req.files) {
        const file = req.files[fieldName];
        const fileExtension = path.extname(file.name);

        if (!allowedExtArray.includes(fileExtension)) {
          const message = `Only ${allowedExtArray.join(", ")} files allowed.`;
          return next(ApiError.cannotProcess(message));
        }
      }
    }

    next();
  };
};
// const fileExtensionLimiter = (allowedExtensions) => {
//   const extensionRegex = new RegExp(
//     `\\.(${allowedExtensions.join("|")})$`,
//     "i"
//   );

//   return (req, res, next) => {
//     console.log("req.files in fileExtensionLimiter:", req.files);
//     if (req.files) {
//       for (const fieldName in req.files) {
//         if (Array.isArray(req.files[fieldName])) {
//           for (const file of req.files[fieldName]) {
//             if (!extensionRegex.test(file.name)) {
//               return next(
//                 ApiError.cannotProcess(
//                   `Not allowed file type, Only ${allowedExtensions.join(
//                     ", "
//                   )} allowed`
//                 )
//               );
//             }
//           }
//         } else {
//           const file = req.files[fieldName];
//           if (!extensionRegex.test(file.name)) {
//             return next(
//               ApiError.cannotProcess(
//                 `Not allowed file type, Only ${allowedExtensions.join(
//                   ", "
//                 )} allowed`
//               )
//             );
//           }
//         }
//       }
//     }

//     next();
//   };
// };

// export all functions as filePolicy
const filePolicy = {
  filePayloadExists,
  fileSizeLimiter,
  fileExtensionLimiter,
};

module.exports = filePolicy;
