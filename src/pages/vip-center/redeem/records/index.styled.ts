import styled from 'styled-components';
// @ts-ignore
import { colors, mixins } from '@tidb-community/ui';
import { Table as RawTable } from 'antd';

export const Table = styled(RawTable)`
  padding: 1rem;
  border-radius: 6px;
  background-color: ${colors.M1};

  .ant-table-cell {
    padding-left: 0;
  }

  thead[class*='ant-table-thead'] th {
    background-color: ${colors.M1} !important;
  }
`;
