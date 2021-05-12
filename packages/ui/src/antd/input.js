import { css } from 'styled-components';

import * as colors from '../colors';
import * as mixins from '../mixins';

export default css`
  // Input
  .ant-input {
    &:hover {
      border-color: ${colors.B1};
    }

    &:focus,
    &.ant-input-focused {
      border-color: ${colors.B1};
      box-shadow: 0 0 0 2px rgb(61 63 234 / 20%);
    }
  }

  // Input wrapper
  .ant-input-affix-wrapper {
    &:hover {
      border-color: ${colors.B1};
    }

    &:focus,
    &.ant-input-affix-wrapper-focused {
      border-color: ${colors.B1};
      box-shadow: 0 0 0 2px rgb(61 63 234 / 20%);
    }
  }

  // Radio
  .ant-radio-wrapper {
    &:hover,
    &:focus {
      .ant-radio {
        .ant-radio-inner {
          border-color: ${colors.B1};
        }
      }
    }

    .ant-radio {
      &.ant-radio-checked {
        .ant-radio-inner {
          border-color: ${colors.B1};

          &:after {
            background-color: ${colors.B1};
          }
        }

        &:after {
          border: 1px solid ${colors.B1};
        }
      }
    }

    span:nth-child(2) {
      ${mixins.typography('p2')}
    }
  }

  // checkbox
  .ant-checkbox-wrapper {
    &:hover {
      .ant-checkbox {
        .ant-checkbox-inner {
          border-color: ${colors.B1};
        }
      }
    }

    .ant-checkbox-input:focus {
      & + .ant-checkbox-inner {
        border-color: ${colors.B1};
      }
    }

    .ant-checkbox {
      &.ant-checkbox-checked {
        .ant-checkbox-inner {
          border-color: ${colors.B1};
          background-color: ${colors.B1};

          &:after {
            background-color: ${colors.B1};
          }
        }

        &:after {
          border: 1px solid ${colors.B1};
        }
      }
    }

    span:nth-child(2) {
      ${mixins.typography('p2')}
    }
  }

  // select

  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: ${colors.B1};
  }

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: ${colors.B1};
    box-shadow: 0 0 0 2px rgb(61 63 234 / 20%);
  }

  // fixme: it's not work!
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: ${colors.B2};
  }
`;
