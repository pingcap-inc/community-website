import { css } from 'styled-components';

import * as colors from '../colors';

const linkColor = '#73061c';

export default css`
  a {
    color: ${linkColor};
    &:hover {
      color: ${colors.B1};
      text-decoration: underline;
    }
  }
`;
