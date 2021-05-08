import * as R from 'ramda';

export const replaceNavLinks = ({ items, rules = [] }) => {
  if (!rules.length || !Array.isArray(items)) return items;

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
      item.link = replaceLink({ link: item.link, rules });
    }

    newItems.push(newItem);
  }

  return newItems;
};

export const replaceLink = ({ link, rules }) => {
  for (const { urlPrefixRegexp, replacement } of rules) {
    if (!urlPrefixRegexp || !urlPrefixRegexp.test(link)) {
      continue;
    }

    // stop replacing if replacement is false
    if (replacement === false) {
      break;
    }

    // return '/' as root path if the link is totally matched
    link = link.replace(urlPrefixRegexp, replacement || '') || '/';

    // only match first rule
    break;
  }

  return link;
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

export const _applyTidbIoSpecRule = (rules, { domain, path, domainConfig }) => {
  // "tidb.io" is applied a special Nginx rule which maps "tidb.io/" to "tug.tidb.io/community", and the
  // mapping makes NextJS router confused.So we will idetify this use case and do a patch accordingly.
  if ('tidb.io' === domain) {
    let specRule;
    if (path === '' || path === '/') {
      specRule = {
        urlPrefixRegexp: buildUrlPrefixPattern({ domain, path }),
        replacement: '/community',
      };
    } else {
      specRule = {
        urlPrefixRegexp: buildUrlPrefixPattern({ domain }),
        replacement: false,
      };
    }

    return [specRule, ...rules];
  } else {
    return rules;
  }
};
