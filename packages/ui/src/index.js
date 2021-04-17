import { clearFix } from 'polished';
import { createGlobalStyle } from 'styled-components';

import * as colors from './colors';
import * as constants from './constants';
import * as mixins from './mixins';
import resetAntStyles from './antd';

// Data
import footerData, * as defaultFooterData from './components/footer/footer.data';
import headerData, * as defaultHeaderData from './components/header/header.data';
// Utils
import * as headerUtils from './components/header/header.utils';
import { nav } from './utils';

export const getData = (domain, path, locale) => {
  const urlPrefixRegexp = nav.buildUrlPrefixPattern(domain, path);

  const { navItems: footerNavItems, ...restFooterData } = footerData[locale] || defaultFooterData;
  const { navItems: headerNavItems, ...restHeaderData } = headerData[locale] || defaultHeaderData;

  return {
    footer: {
      navItems: nav.replaceNavLinks(footerNavItems, urlPrefixRegexp),
      ...restFooterData,
    },
    header: {
      navItems: nav.replaceNavLinks(headerNavItems, urlPrefixRegexp),
      ...restHeaderData,
    },
  };
};

export const utils = {
  header: headerUtils,
};

export { colors, constants, mixins };
export { ActivityCards, Footer, Header, ViewMoreButton } from './components';

export const createAppGlobalStyle = () => createGlobalStyle`
  .${constants.appClassName} {
    font-family: 'Titillium Web', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    color: ${colors.F1};
    font-size: 16px;
    line-height: 1.75;
    --antd-wave-shadow-color: ${colors.B1};

    * {
      &::selection  {
        background: ${colors.B1};
      }
    }

    .clearfix {
      ${clearFix()};
    }

    ${resetAntStyles};
  }
`;
