import { css } from 'styled-components';

import * as colors from '../colors';

export default css`
  .ant-picker-focused {
    border-color: ${colors.B1};
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px ${colors.B1}33;
    box-shadow: 0 0 0 2px ${colors.B1}33;
  }
  .ant-picker {
    color: ${colors.F2};
    border-color: ${colors.C2};

    &:hover {
      border-color: ${colors.B1};
    }

    &-header-view button {
      color: ${colors.F1};

      &:hover {
        color: ${colors.B1};
      }
    }

    &-content th,
    &-cell-in-view {
      color: ${colors.F1};

      &.ant-picker-cell-today .ant-picker-cell-inner::before {
        border-color: ${colors.B1};
      }

      &.ant-picker-cell-selected .ant-picker-cell-inner {
        background: ${colors.B1};
      }
    }

    &-today-btn {
      color: ${colors.B1};
    }
  }
`;
