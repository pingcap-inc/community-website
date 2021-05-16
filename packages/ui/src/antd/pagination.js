import { css } from 'styled-components';

import * as colors from '../colors';
import * as mixins from '../mixins';

const itemMixin = (borderColor, linkColor = borderColor) => css`
  border-color: ${borderColor};

  a,
  .anticon {
    color: ${linkColor};
  }
`;

export default css`
  .ant-pagination {
    &-item-link,
    &-item {
      ${itemMixin(colors.C4, colors.F1)};

      &:hover {
        ${itemMixin(colors.B1)};
      }
    }

    &-item-active {
      ${itemMixin(colors.B1)};
    }

    &-disabled {
      .ant-pagination-item-link {
        ${itemMixin(colors.T2, colors.C4)};
      }
    }
  }
`;
