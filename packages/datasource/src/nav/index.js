import * as R from 'ramda';

import * as footerData from './footer/footer.data';
import * as headerData from './header/header.data';
import * as resourcesData from './resources';
import genUserMenu from './user';

import { buildUrlPrefixPattern, replaceNavLinks, replaceLink, _applyTidbIoSpecRule, _makeHiddenItems } from './utils';

export const getData = ({ domain, domainConfig, env, locale, path, meData }) => {
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
    ...Object.keys(domainConfig).map((domain) => ({
      urlPrefixRegexp: buildUrlPrefixPattern({ domain }),
      replacement: (env === 'local' ? 'https://' : 'https://') + domainConfig[domain],
    })),
  ];

  rules = _applyTidbIoSpecRule(rules, { domain, path, domainConfig });

  const userProfileNavItems = genUserProfileItems(meData);
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
      orgVerificationAgreementsUrl: replaceLink({
        link: resourcesData.orgVerificationAgreementsUrl,
        rules,
      }),
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
