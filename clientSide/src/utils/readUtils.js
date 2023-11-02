

function priceFormatter(number) {
  let decNum = number.toFixed(2);
  let str = decNum.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "$" + str.join(".");
}

// Capitalize random number of words
function capitalizeFirstLetter(text) {
  if (typeof text !== "string") {
    return text;
  }

  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Get File name from a download URL
function getFileFromUrl(downloadURL) {
  // Slice off the base URL from downloadURL
  const baseURL = `https://firebasestorage.googleapis.com/v0/b/sylinn-full-stack.appspot.com/o/`;
  let fileGlob = downloadURL.replace(baseURL, "");

  // Remove everything after the query string
  const indexOfEndPath = fileGlob.indexOf("?");
  fileGlob = fileGlob.substring(0, indexOfEndPath);

  return fileGlob;
}

const utils = { priceFormatter, capitalizeFirstLetter, getFileFromUrl };

export default utils;
