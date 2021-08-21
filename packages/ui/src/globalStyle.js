import resetAntStyles from './antd';
import { clearFix } from 'polished';
import { createGlobalStyle } from 'styled-components';

import * as colors from './colors';
import * as constants from './constants';
import * as mixins from './mixins';

const createAppGlobalStyle = () => createGlobalStyle`
  .${constants.appClassName} {
    ${mixins.resetFontFamily()};
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

    h1, h2, h3, h4, h5, h6 {
      color: ${colors.F1};
      font-weight: bold;
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
