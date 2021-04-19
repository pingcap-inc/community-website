import * as R from 'ramda';

export const replaceNavLinks = ({ items, rules }) => {
  if (!rules || !rules.length || !Array.isArray(items)) return items;

  const newItems = [];

  for (const item of items) {
    const newItem = { ...item };

    if (item.items) {
      newItem.items = replaceNavLinks({
        items: item.items,
        rules,
      });
    }

    if (R.is(String, item.link)) {
      for (const { urlPrefixRegexp, replacement } of rules) {
        if (!urlPrefixRegexp || !urlPrefixRegexp.test(item.link)) {
          continue;
        }

        // return '/' as root path if the link is totally matched
        newItem.link = item.link.replace(urlPrefixRegexp, replacement || '') || '/';

        // only match first rule
        break;
      }
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
