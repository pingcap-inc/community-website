import * as R from 'ramda';

import * as footerData from './footer/footer.data';
import * as headerData from './header/header.data';
import { buildUrlPrefixPattern, replaceNavLinks, replaceLink, _applyTidbIoSpecRule } from './utils';

export const getData = ({ domain, domainConfig, env, locale, path, meData }) => {
  const defaultLocale = 'zh';

  const { navItems: footerNavItems, ...restFooterData } = R.propOr(footerData[defaultLocale], locale)(footerData);
  const { navItems: headerNavItems, genUserProfileItems, loginUrl, ...restHeaderData } = R.propOr(
    headerData[defaultLocale],
    locale
  )(headerData);

  let rules = [
    // replaces all current URLs' prefix at current domain
    {
      urlPrefixRegexp: buildUrlPrefixPattern({ domain, path }),
      replacement: '',
    },

    // replaces all domains by domainConfig
    ...Object.keys(domainConfig).map((domain) => ({
      urlPrefixRegexp: buildUrlPrefixPattern({ domain }),
      replacement: (env === 'local' ? 'http://' : 'https://') + domainConfig[domain],
    })),
  ];

  rules = _applyTidbIoSpecRule(rules, { domain, path, domainConfig });
  const userProfileNavItems = genUserProfileItems(meData);
  // This is used for getting current nav.
  const hiddenUserProfileNavItems =
    userProfileNavItems && userProfileNavItems.map(({ ...props }) => ({ ...props, hidden: true }));

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
        items: headerNavItems.concat(hiddenUserProfileNavItems || []),
        rules,
      }),
      userProfileNavItems: replaceNavLinks({
        items: userProfileNavItems,
        rules,
      }),
      loginUrl: replaceLink({
        link: loginUrl,
        rules,
      }),
      ...restHeaderData,
    },
  };
};
