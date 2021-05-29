import { css } from 'styled-components';

import * as colors from '../colors';
import * as mixins from '../mixins';

export default css`
  .ant-radio {
    &-wrapper {
      span:nth-child(2) {
        ${mixins.typography('p2')}
      }

      &:hover {
        .ant-radio-inner {
          border-color: ${colors.B1};
        }
      }
    }

    &-input {
      &:focus + .ant-radio-inner {
        border-color: ${colors.B1};
      }
    }

    &.ant-radio-checked:not(.ant-radio-disabled) {
      .ant-radio-inner {
        border-color: ${colors.B1};

        &::after {
          background-color: ${colors.B1};
        }
      }

      &::after {
        border-color: ${colors.B1};
      }
    }
  }
`;
