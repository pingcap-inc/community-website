import { clearFix } from 'polished';
import { createGlobalStyle } from 'styled-components';

import * as colors from './colors';
import * as mixins from './mixins';
import resetAntStyles from './antd';

export { colors, mixins };

export { Header, Footer } from './components';

export const createAppGlobalStyle = () => createGlobalStyle`
  html, body {
    font-family: "Titillium Web", "Helvetica Neue", Arial, sans-serif;
    &:lang(zh-CN) {
      font-family: "Noto Sans", "Noto Sans CJK", "Helvetica Neue", Arial, sans-serif;
    }
    font-size: 16px;
    line-height: 1.75;
  }

  #__next {
    .clearfix {
      ${clearFix()};
    }

    ${resetAntStyles};
  }
`;
