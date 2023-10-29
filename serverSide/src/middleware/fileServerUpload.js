const ApiError = require("../utils/ApiError.js");
const path = require("path");

// This function move files to the server's public folder and wait for upload to cloud storage
const fileServerUpload = (req, res, next) => {
  let urlsFileNames = [];
  let pdfFileNames = [];

  if (req.files) {
    const imageUrlsFiles = [];
    const downloadUrlsFiles = [];

    for (const fileKey in req.files) {
      if (fileKey.startsWith("urls")) {
        imageUrlsFiles.push(req.files[fileKey]);
      } else if (fileKey.startsWith("downloadUrls")) {
        downloadUrlsFiles.push(req.files[fileKey]);
      }
    }

    const uploadImagePromises = imageUrlsFiles.map(async (urlsFile) => {
      const urlsFileName = Date.now() + "_" + urlsFile.name;
      const urlsUploadPath = path.join(
        __dirname,
        "../../public/uploads",
        urlsFileName
      );
      urlsFileNames.push(urlsFileName);

      try {
        await urlsFile.mv(urlsUploadPath);
        console.log(`Upload to server is successful: ${urlsUploadPath}`);
      } catch (err) {
        return next(ApiError.internalError("Error uploading image file", err));
      }
    });

    Promise.all(uploadImagePromises)
      .then(() => {
        res.locals.imageNames = urlsFileNames; // Set res.locals.imageNames here
        return uploadPdfFiles(downloadUrlsFiles, pdfFileNames, req, res, next);
      })
      .catch((err) => {
        return next(ApiError.internalError("Error uploading image file", err));
      });
  } else {
    next();
  }
};

const uploadPdfFiles = (downloadUrlsFiles, pdfFileNames, req, res, next) => {
  const uploadPdfPromises = downloadUrlsFiles.map(async (pdfFile) => {
    const pdfFileName = Date.now() + "_" + pdfFile.name;
    const pdfUploadPath = path.join(
      __dirname,
      "../../public/uploads",
      pdfFileName
    );
    pdfFileNames.push(pdfFileName);

    try {
      await pdfFile.mv(pdfUploadPath);
      console.log(`Upload to server is successful: ${pdfUploadPath}`);
    } catch (err) {
      return next(ApiError.internalError("Error uploading PDF file", err));
    }
  });

  Promise.all(uploadPdfPromises)
    .then(() => {
      res.locals.pdfNames = pdfFileNames; // Set res.locals.pdfNames here
      next();
    })
    .catch((err) => {
      return next(ApiError.internalError("Error uploading PDF file", err));
    });
};

module.exports = fileServerUpload;
