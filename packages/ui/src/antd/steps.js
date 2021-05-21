import { css } from 'styled-components';

import * as colors from '../colors';
import * as mixins from '../mixins';

export default css`
  .ant-steps {
    &-item-icon {
      ${mixins.flexCenter('inline')};
    }

    &-item-finish,
    &-item-process {
      .ant-steps-item-title {
        color: ${colors.F1} !important;
      }
    }

    &-item-finish {
      .ant-steps-item-icon {
        border-color: ${colors.B1};

        .anticon {
          color: ${colors.B1};
        }
      }

      .ant-steps-item-title {
        &::after {
          background-color: ${colors.B1} !important;
        }
      }
    }

    &-item-process {
      .ant-steps-item-icon {
        border-color: ${colors.B1};
        background: ${colors.B1};
      }

      .ant-steps-item-title {
        &::after {
          background-color: ${colors.T2} !important;
        }
      }
    }

    &-item-wait {
      .ant-steps-item-icon {
        border-color: ${colors.C4};

        .ant-steps-icon {
          color: ${colors.C4};
        }
      }

      .ant-steps-item-title {
        color: ${colors.C4} !important;
      }
    }
  }
`;
