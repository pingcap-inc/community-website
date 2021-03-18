import { clearFix } from 'polished';
import { createGlobalStyle } from 'styled-components';

import * as colors from './colors';
import * as mixins from './mixins';
import resetAntStyles from './antd';

export { colors, mixins };

export { Header, Footer } from './components';

export const createAppGlobalStyle = () => createGlobalStyle`
  #__next {
    .clearfix {
      ${clearFix()};
    }

    ${resetAntStyles};
  }
`;
