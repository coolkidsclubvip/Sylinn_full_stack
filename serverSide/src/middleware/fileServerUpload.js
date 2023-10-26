// To upload the uploaded file to uploads folder(locally)
const ApiError = require("../utils/ApiError.js");
const path = require("path");

const fileServerUpload = (req, res, next) => {
  // Check if files are uploaded
  if (req.files) {
    // Check if 'urls' file is uploaded
    if (req.files.urls) {
      const urlsFile = req.files.urls;
      const urlsFileName = Date.now() + "_" + urlsFile.name;
      const urlsUploadPath = path.join(
        __dirname,
        "../../public/uploads",
        urlsFileName
      );

      urlsFile
        .mv(urlsUploadPath)
        .then(() => {
          console.log(`Upload to server is successful: ${urlsUploadPath}`);
          res.locals.imageName = urlsFileName;

          // Check if 'downloadUrls' file is uploaded
          if (req.files.downloadUrls) {
            const pdfFile = req.files.downloadUrls;
            const pdfFileName = Date.now() + "_" + pdfFile.name;
            const pdfUploadPath = path.join(
              __dirname,
              "../../public/uploads",
              pdfFileName
            );

            pdfFile
              .mv(pdfUploadPath)
              .then(() => {
                console.log(`Upload to server is successful: ${pdfUploadPath}`);
                res.locals.pdfName = pdfFileName;
                next();
              })
              .catch((err) => {
                return next(
                  ApiError.internalError("Error uploading PDF file", err)
                );
              });
          } else {
            next();
          }
        })
        .catch((err) => {
          return next(
            ApiError.internalError("Error uploading image file", err)
          );
        });
    } else {
      next();
    }
  } else {
    next();
  }
};

module.exports = fileServerUpload;
