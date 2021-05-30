import { css } from 'styled-components';

import * as colors from '../colors';

export default css`
  .ant-input,
  .ant-input-affix-wrapper {
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

  .ant-form-item-has-error .ant-input,
  .ant-form-item-has-error .ant-input-affix-wrapper,
  .ant-form-item-has-error .ant-input:hover,
  .ant-form-item-has-error .ant-input-affix-wrapper:hover {
    border-color: #ff4d4f;
  }
`;
