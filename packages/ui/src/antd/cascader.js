import { css } from 'styled-components';

import * as colors from '../colors';

export default css`
  .ant-cascader-picker,
  .ant-cascader-menu {
    color: ${colors.F2};
  }

  .ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled),
  .ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled):hover {
    background: transparent;
    font-weight: normal;
    color: ${colors.B1};
  }
`;
