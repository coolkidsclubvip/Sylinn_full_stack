// Put numbers into format of Price
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

  return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatCategoryName(category) {
  let categoryText = "";

  switch (category) {
    case "acc":
      categoryText = "Accessories";
      break;
    case "bath":
      categoryText = "Bath Tubs";
      break;
    case "grate":
      categoryText = "Floor Grates";
      break;
    case "htr":
      categoryText = "Heated Towel Racks";
      break;
    case "sink":
      categoryText = "Kitchen/Laundry Sinks";
      break;
    case "led":
      categoryText = "LED Mirrors";
      break;
    default:
      categoryText = "Unknown Category";
      break;
  }

  return categoryText;
}


const writeUtils = {
  priceFormatter,
  capitalizeFirstLetter,
  formatCategoryName,
};

export default writeUtils;
