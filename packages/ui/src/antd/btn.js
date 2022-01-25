import { css } from 'styled-components';

import * as colors from '../colors';

export default css`
  .ant-btn {
    height: 40px;
    padding: 0 16px;
    line-height: 38px;
    text-transform: uppercase;
    text-shadow: none;
    border-radius: 4px;
    box-shadow: none;

    &:hover:not(&-link):not(&-primary):not(&-text):not(&[disabled]),
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
      border-radius: 6px;
    }

    &-background-ghost {
      &:hover {
        background-color: ${colors.B1} !important;
      }
    }

    &-primary {
      background-color: ${colors.B1};
      border: none;

      &[disabled] {
        background-color: ${colors.B1} !important;
        color: ${colors.M1} !important;
        opacity: 0.6 !important;
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
        color: ${colors.B1} !important;
      }

      &[disabled] {
        color: ${colors.F2};
        opacity: 0.6;
      }
    }
  }
`;
