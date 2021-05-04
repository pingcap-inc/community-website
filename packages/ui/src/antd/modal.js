import { css } from 'styled-components';

import * as colors from '../colors';
import * as mixins from '../mixins';

export default css`
  .ant-modal-confirm {
    &-title {
      color: ${colors.F1};
    }

    &-body {
      color: ${colors.F2};
    }

    .ant-btn {
      ${mixins.verticalLineMiddle('32px')};
      padding: 0 14px;
      color: ${colors.F1};
      font-size: 14px;

      &.ant-btn-primary {
        color: ${colors.M1};
      }
    }
  }
`;
