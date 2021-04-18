import * as R from 'ramda';

export const replaceNavLinks = ({ items, urlPrefixRegexp }) => {
  if (!urlPrefixRegexp || !Array.isArray(items)) return items;

  const newItems = [];

  for (const item of items) {
    const newItem = { ...item };

    if (item.items) {
      newItem.items = replaceNavLinks({
        items: item.items,
        urlPrefixRegexp,
      });
    }

    if (R.is(String, item.link)) {
      // return '/' as root path if the link is totally matched
      newItem.link = item.link.replace(urlPrefixRegexp, '') || '/';
    }

    newItems.push(newItem);
  }

  return newItems;
};

export const buildUrlPrefixPattern = ({ domain, path } = {}) => {
  if (!domain) return null;

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
