import { css } from 'styled-components';

import * as colors from '../colors';
import * as mixins from '../mixins';

export default css`
  .ant-menu {
    ${mixins.resetFontFamily()};
    color: ${colors.F1};
  }
`;
