import { css } from 'styled-components';

import * as colors from '../colors';
import * as mixins from '../mixins';

export default css`
  .ant-btn {
    ${mixins.verticalLineMiddle('40px')};
    padding: 0 1rem;
    text-shadow: none;
    box-shadow: none;
    text-transform: uppercase;
    background-color: ${colors.B1};

    &-sm {
      ${mixins.verticalLineMiddle('32px')};
      font-size: 0.875rem;
      padding: 0 0.875rem;
    }

    &-lg {
      ${mixins.verticalLineMiddle('48px')};
      font-size: 1.25rem;
    }

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
        border: 2px solid ${colors.B1};

        &.ant-btn-sm {
          border-width: 1px;
        }

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
