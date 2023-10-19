


function useCapitalizeFirstLetter(text) {
  if (typeof text !== "string") {
    return text;
  }

  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default useCapitalizeFirstLetter;
