export const capitalizeFirst = (str) =>
  str.replace(
    /(^\w|\s\w)(\S*)/g,
    (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
  );

export const generatedTextToUrl = (str) => {
  const movieUrl = str
    .trim()
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(",", "%2C")
    .replace(/&/g, "and")
    .replaceAll("?", "-")
    .replaceAll("+", "%2B")
    .replaceAll("/", "-or-");
  return movieUrl;
};

export const generatedUrlToText = (str) => {
  const movieUrl = str
    .trim()
    .toLowerCase()
    .replaceAll("-", " ")
    .replace("and", /&/g)
    .replaceAll("-", "?")
    .replaceAll("%2B", "+")
    .replaceAll("-or-", "/");
  return movieUrl;
};
