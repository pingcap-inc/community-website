import { css } from 'styled-components';

import * as colors from '../colors';

export default css`
  ${'' /* Input */}
  .ant-input, .ant-input-affix-wrapper {
    color: ${colors.F2};
    border-color: ${colors.C2};

    &:hover {
      border-color: ${colors.B1};
    }

    &:focus,
    &.ant-input-focused {
      border-color: ${colors.B1};
    }

    .anticon {
      color: ${colors.F2};
    }
  }

  ${'' /* Select */}
  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: ${colors.B1};
  }

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: ${colors.B1};
    box-shadow: 0 0 0 2px rgb(61 63 234 / 20%);
  }

  ${'' /* FIXME: Not working! */}
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: ${colors.B2};
  }
`;
