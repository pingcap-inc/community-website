import { css } from 'styled-components';

import * as colors from '../colors';

export default css`
  .ant-btn {
    height: 40px;
    padding: 0 16px;
    line-height: 38px;
    text-transform: uppercase;
    text-shadow: none;
    border-radius: 6px;
    box-shadow: none;

    &:hover:not(&-link):not(&-primary):not(&-text),
    &:focus:not(&-link):not(&-primary):not(&-text) {
      color: ${colors.B1};
      border-color: ${colors.B1};
    }

    &-sm {
      height: 32px;
      padding: 0 14px;
      font-size: 14px;
      line-height: 30px;
    }

    &-lg {
      height: 48px;
      font-size: 20px;
      line-height: 46px;
    }

    &-primary {
      background-color: ${colors.B1};
      border: none;

      &:hover {
        background-color: #3739d2 !important;
      }

      &[disabled] {
        color: ${colors.M1};
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
          background-color: ${colors.M2} !important;
          border-color: ${colors.T2};
        }
      }
    }

    &-link {
      color: ${colors.B1};

      &:hover {
        color: #3739d2 !important;
      }

      &[disabled] {
        color: ${colors.F2};
        opacity: 0.6;
      }
    }
  }
`;
