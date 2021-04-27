import { css } from 'styled-components';

import * as colors from '../colors';

export default css`
  .ant-table {
    &-thead {
      & > tr > th {
        color: ${colors.F1};
        font-weight: bold;
        background: ${colors.M2};
        border-bottom-color: ${colors.T2};
      }
    }

    &-tbody {
      & > tr {
        &:hover {
          & > td {
            background: ${colors.M2};
          }
        }

        & > td {
          color: ${colors.F2};
          border-bottom-color: ${colors.T2};
        }
      }
    }
  }
`;
