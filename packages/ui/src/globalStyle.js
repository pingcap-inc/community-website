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
