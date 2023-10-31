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

const utils={ priceFormatter, capitalizeFirstLetter }

export default utils;
