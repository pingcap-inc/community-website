export const replaceNavLinks = ({ items, urlPrefixRegexp }) => {
  // return '/' as root path if the link is totally matched
  const replace = (link) => link?.replace(urlPrefixRegexp, '') || '/';

  if (!urlPrefixRegexp) return items;

  if (!Array.isArray(items)) {
    return {
      ...items,
      link: replace(items.link),
    };
  }

  const newItems = [];

  for (const item of items) {
    const newItem = { ...item };

    if (item.items) {
      newItem.items = replaceNavLinks({
        items: item.items,
        urlPrefixRegexp,
      });
    }

    newItem.link = replace(newItem.link);

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
