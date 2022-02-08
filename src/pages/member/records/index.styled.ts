import styled from 'styled-components';
// @ts-ignore
import { colors } from '@tidb-community/ui';
import { Table as RawTable } from 'antd';

export const PointsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.M1};
  padding: 1rem;
  border-radius: 6px;
`;

export const PointsContainerLabel = styled.span`
  color: ${colors.F1};
  margin-right: 0.5rem;
  font-size: 18px;
`;

export const PointsContainerValue = styled.span`
  color: ${colors.B1};
  font-size: 18px;
  margin-right: 2rem;
`;

export const Table = styled(RawTable)`
  margin-top: 1rem;
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
