import * as R from 'ramda';

export const replaceNavLinks = (items, urlPrefixRegexp) => {
  if (!Array.isArray(items)) {
    return items;
  }

  const newItems = [];

  for (const item of items) {
    const newItem = { ...item };

    if (item.items) {
      newItem.items = replaceNavLinks(item.items, urlPrefixRegexp);
    }

    if (R.is(String, item.link)) {
      newItem.link = item.link.replace(urlPrefixRegexp, '') || '/'; // root path if totally matched
    }

    newItems.push(newItem);
  }

  return newItems;
};

export const buildUrlPrefixPattern = (domain, path) => {
  const schemeSpecPart = '^https?:';
  const domainPart = domain.replace(/\./g, '\\.'); // escape wildcard character
  let pathPart;

  if (!path || path === '/') {
    pathPart = '';
  } else {
    pathPart = '/' + path.replace(/^\/|\/$/g, '');
  }

  return new RegExp(schemeSpecPart + '//' + domainPart + pathPart);
};
