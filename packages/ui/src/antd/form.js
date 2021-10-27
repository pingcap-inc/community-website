import { css } from 'styled-components';

import * as colors from '../colors';

export default css`
  .ant-form {
    &-item-extra {
      font-size: 12px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.65);
      font-weight: normal;
      margin-top: 12px;
    }

    &-item-label > label {
      color: ${colors.F1};
    }
  }

  .ant-input:focus {
    border-color: ${colors.B1};
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px ${colors.B1}33;
    box-shadow: 0 0 0 2px ${colors.B1}33;
  }
`;
