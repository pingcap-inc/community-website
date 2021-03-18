import { clearFix } from 'polished';
import { createGlobalStyle } from 'styled-components';

import resetAntStyles from './antd';

export const createAppGlobalStyle = () => createGlobalStyle`
  #__next {
    .clearfix {
      ${clearFix()};
    }

    ${resetAntStyles};
  }
`;

export { Header, Footer } from './components';
