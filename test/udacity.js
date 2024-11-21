function capitalizeTitle(str) {
  const exceptions = new Set([
    "a",
    "an",
    "the",
    "as",
    "at",
    "by",
    "for",
    "in",
    "of",
    "and",
    "or",
    "not",
  ]);

  return str.replace(/([-_ ]|^)([a-z]+)/g, (match) => {
    // // Capitalize the first word or any word not in exceptions
    // if (index === 0 || !exceptions.has(word)) {
    return word;
  });
}

const input = "the not-blue elephant jumped";
const output = capitalizeTitle(input);
console.log(output); // "The not-Blue Elephant Jumped"
