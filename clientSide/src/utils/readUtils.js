

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


  // A function to get rid of timestamp from imageName
  const deleteTimestampFromName = (imageName) => {
    const indexOfUnderscore = imageName.indexOf("_");
    return indexOfUnderscore !== -1
      ? imageName.slice(indexOfUnderscore + 1)
      : imageName;
  };

const readUtils = {   getFileFromUrl,deleteTimestampFromName  };

export default readUtils;
