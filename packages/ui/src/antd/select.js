import * as polished from 'polished';
import { css } from 'styled-components';

import * as colors from '../colors';

export default css`
  .ant-select {
    color: ${colors.F1};

    &-focused:not(.ant-select-disabled),
    &:not(.ant-select-disabled):hover,
    &-focus:not(.ant-select-disabled) {
      .ant-select-selector {
        border-color: ${colors.B1} !important;
        box-shadow: 0 0 0 2px ${polished.rgba(colors.B1, 0.2)} !important;
      }
    }

    &-item-option:not(.ant-select-item-option-disabled) {
      color: ${colors.F2};
    }

    &-item-option-selected:not(.ant-select-item-option-disabled) {
      background: transparent;
      font-weight: normal;
      color: ${colors.B1};
    }
  }
`;
