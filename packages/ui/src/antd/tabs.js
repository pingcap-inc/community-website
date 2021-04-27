import { css } from 'styled-components';

import * as colors from '../colors';

export default css`
  .ant-tabs {
    color: ${colors.F1};

    &-nav {
      &::before {
        border-bottom-color: ${colors.T2};
      }
    }

    &-tab {
      &:hover {
        color: ${colors.B1};
      }
    }

    &-ink-bar {
      background: ${colors.B1};
    }

    &-tab-active {
      .ant-tabs-tab-btn {
        color: ${colors.B1};
      }
    }
  }
`;
