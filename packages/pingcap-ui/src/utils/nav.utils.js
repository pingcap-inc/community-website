export function replaceNavLinks(items, urlPrefixRegexp) {
  if (!Array.isArray(items)) {
    return items;
  }

  const newItems = [];

  for (const item of items) {
    const newItem = { ...item };

    if (item.items) {
      newItem.items = replaceNavLinks(item.items, urlPrefixRegexp);
    }

    if (typeof item.link === 'string') {
      newItem.link = item.link.replace(urlPrefixRegexp, '') || '/'; // root path if totally matched
    }

    newItems.push(newItem);
  }

  return newItems;
}
