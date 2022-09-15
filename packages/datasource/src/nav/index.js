import * as R from 'ramda';

import * as footerData from './footer/footer.data';
import * as headerData from './header/header.data';
import * as resourcesData from './resources';
import genUserMenu from './user';

import { buildUrlPrefixPattern, replaceNavLinks, replaceLink, _makeHiddenItems } from './utils';

export const getData = ({ domain, domainConfig, env, locale, path, meData, redDots }) => {
  const defaultLocale = 'zh';

  const { navItems: footerNavItems, ...restFooterData } = R.propOr(footerData[defaultLocale], locale)(footerData);
  const {
    navItems: headerNavItems,
    genUserProfileItems,
    loginUrl,
    logoutUrl,
    homeUrl,
    ...restHeaderData
  } = R.propOr(headerData[defaultLocale], locale)(headerData);

  let rules = [
    // replaces all current URLs' prefix at current domain
    {
      urlPrefixRegexp: buildUrlPrefixPattern({ domain, path }),
      replacement: '',
    },

    // replaces all domains by domainConfig
    ...Object.keys(domainConfig).map((domain) => {
      const destDomain = domainConfig[domain];
      return {
        urlPrefixRegexp: buildUrlPrefixPattern({ domain }),
        replacement: (destDomain.startsWith('localhost') ? 'http://' : 'https://') + destDomain,
      };
    }),
  ];

  const userProfileNavItems = genUserProfileItems({ meData, redDots });
  const userItems = genUserMenu(meData);
  // These are used for getting current nav.
  const hiddenUserProfileNavItems = _makeHiddenItems(userProfileNavItems);
  const hiddenUserItems = _makeHiddenItems(userItems);

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
        items: headerNavItems.concat(hiddenUserProfileNavItems || []).concat(hiddenUserItems || []),
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
      logoutUrl: replaceLink({
        link: logoutUrl,
        rules,
      }),
      homeUrl: replaceLink({
        link: homeUrl,
        rules,
      }),
      ...restHeaderData,
    },
    resources: {
      orgPrivacyAgreementsUrl: replaceLink({
        link: resourcesData.orgPrivacyAgreementsUrl,
        rules,
      }),
    },
    user: replaceNavLinks({
      items: userItems,
      rules,
    }),
  };
};
