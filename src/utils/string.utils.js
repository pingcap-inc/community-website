// https://stackoverflow.com/a/60738940/14257627
export const camelize = (str) => str.replace(/-./g, (x) => x[1].toUpperCase());
