import * as R from 'ramda';

import * as footerData from './footer/footer.data';
import * as headerData from './header/header.data';
import { buildUrlPrefixPattern, replaceNavLinks, _applyTidbIoSpecRule } from './utils';

export const getData = ({ domain, path, locale, domainConfig }) => {
  const defaultLocale = 'zh';

  const { navItems: footerNavItems, ...restFooterData } = R.propOr(footerData[defaultLocale], locale)(footerData);
  const { navItems: headerNavItems, ...restHeaderData } = R.propOr(headerData[defaultLocale], locale)(headerData);

  let rules = [
    // replaces all current URLs' prefix at current domain
    {
      urlPrefixRegexp: buildUrlPrefixPattern({ domain, path }),
      replacement: '',
    },

    // replaces all domains by domainConfig
    ...Object.keys(domainConfig).map((domain) => ({
      urlPrefixRegexp: buildUrlPrefixPattern({ domain }),
      replacement: 'https://' + domainConfig[domain],
    })),
  ];

  rules = _applyTidbIoSpecRule(rules, { domain, path, domainConfig });

  return {
    footer: {
      navItems: replaceNavLinks({
        items: footerNavItems,
        rules,
      }),
      ...restFooterData,
    },
    header: {
      navItems: replaceNavLinks({
        items: headerNavItems,
        rules,
      }),
      ...restHeaderData,
    },
  };
};
