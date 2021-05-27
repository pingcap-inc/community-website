import { css } from 'styled-components';

import * as colors from '../colors';

export default css`
  .ant-alert {
    &-message {
      color: ${colors.F1};
    }

    a {
      &,
      &:hover {
        color: ${colors.B1};
      }
    }
  }
`;
