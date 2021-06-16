import resetAntStyles from './antd';
import { clearFix } from 'polished';
import { createGlobalStyle } from 'styled-components';

import * as constants from './constants';
import * as colors from './colors';

const createAppGlobalStyle = () => createGlobalStyle`
  .${constants.appClassName} {
    font-family: 'Titillium Web', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    color: ${colors.F1};
    font-size: 16px;
    line-height: 1.75;
    --antd-wave-shadow-color: ${colors.B1};

    * {
      &::selection {
        color: ${colors.M1} !important;
        background: ${colors.B1};
      }
    }

    .clearfix {
      ${clearFix()};
    }

    .grecaptcha-badge {
      display: none !important;
    }

    ${resetAntStyles};
  }
`;

export default createAppGlobalStyle;
