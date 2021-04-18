import * as R from 'ramda';
import { clearFix } from 'polished';
import { createGlobalStyle } from 'styled-components';

import * as colors from './colors';
import * as constants from './constants';
import * as mixins from './mixins';
import resetAntStyles from './antd';

// Data
import footerData from './components/footer/footer.data';
import headerData from './components/header/header.data';
// Utils
import * as headerUtils from './components/header/header.utils';
import { nav } from './utils';

export const getData = ({ domain, path, locale } = {}) => {
  const defaultLocale = 'zh';
  const { navItems: footerNavItems, ...restFooterData } = R.propOr(footerData[defaultLocale], locale)(footerData);
  const { navItems: headerNavItems, ...restHeaderData } = R.propOr(headerData[defaultLocale], locale)(headerData);
  const urlPrefixRegexp = nav.buildUrlPrefixPattern({ domain, path });

  return {
    footer: {
      navItems: nav.replaceNavLinks({
        items: footerNavItems,
        urlPrefixRegexp,
      }),
      ...restFooterData,
    },
    header: {
      navItems: nav.replaceNavLinks({
        items: headerNavItems,
        urlPrefixRegexp,
      }),
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
        color: ${colors.M1} !important;
        background: ${colors.B1};
      }
    }

    .clearfix {
      ${clearFix()};
    }

    ${resetAntStyles};
  }
`;
