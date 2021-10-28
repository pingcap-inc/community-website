import { css } from 'styled-components';

import * as colors from '../colors';

export default css`
  .ant-input,
  .ant-input-affix-wrapper {
    color: ${colors.F2};
    border-color: ${colors.C2};
    outline: ${colors.B1};

    &:hover {
      &:not(.ant-input-disabled) {
        border-color: ${colors.B1};
      }
    }

    &:focus,
    &.ant-input-focused {
      border-color: ${colors.B1};
    }

    .anticon {
      color: ${colors.F2};
    }
  }

  .ant-input-affix-wrapper-focused {
    // the prefix 33 is the opacity of the focus ring, in hex
    -webkit-box-shadow: 0 0 0 2px ${colors.B1}33;
    box-shadow: 0 0 0 2px ${colors.B1}33;
  }

  .ant-form-item-has-error .ant-input,
  .ant-form-item-has-error .ant-input-affix-wrapper,
  .ant-form-item-has-error .ant-input:hover,
  .ant-form-item-has-error .ant-input-affix-wrapper:hover {
    border-color: ${colors.AntD.error};
  }
`;
