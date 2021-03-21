import { clearFix } from 'polished';
import { createGlobalStyle } from 'styled-components';

import * as colors from './colors';
import * as constants from './constants';
import * as mixins from './mixins';
import resetAntStyles from './antd';

// Utils
import { getCurrentNav } from './components/header/header.utils';

export { colors, constants, mixins };
export { Header, Footer } from './components';

export const utils = {
  header: {
    getCurrentNav,
  },
};

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
