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
`;
