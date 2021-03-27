import { css } from 'styled-components';

import * as colors from '../colors';
import * as mixins from '../mixins';

export default css`
  .ant-btn {
    text-shadow: none;
    box-shadow: none;
    text-transform: uppercase;
    background-color: ${colors.B1};

    &-primary {
      background-color: ${colors.B1};
      border: none;

      &:hover {
        background-color: #3739d2 !important;
      }

      &[disabled] {
        color: ${colors.M1};
        background-color: #3d3fea;
        opacity: 0.6;
      }

      &.ant-btn-background-ghost {
        color: ${colors.B1};
        border: 1px solid ${colors.B1};

        &:hover {
          color: ${colors.M1};
        }

        &[disabled] {
          color: ${colors.F2};
          border-color: ${colors.T2};
          background-color: ${colors.M2} !important;
        }
      }
    }
  }
`;
