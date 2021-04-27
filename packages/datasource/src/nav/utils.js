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

        // stop replacing if replacement is exactly false
        if (replacement === false) {
          break;
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

export const _applyTidbIoSpecRule = (rules, { domain, path, domainConfig }) => {
  //  site 'tidb.io' has a special nginx rule: tidb.io/ => tug.tidb.io/community, which was different with next router
  // rule.
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
