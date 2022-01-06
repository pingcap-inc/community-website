import styled from 'styled-components';
// @ts-ignore
import { colors, mixins } from '@tidb-community/ui';
import { Table as RawTable } from 'antd';

export const PointsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.M1};
  padding: 1rem;
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

export const Tutorial = styled.span`
  color: ${colors.F1};
  text-align: center;
  font-size: 14px;
  &:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12.71' height='12.71' viewBox='0 0 12.71 12.71'%3E%3Cpath id='Icon_simple-gratipay' data-name='Icon simple-gratipay' d='M12.71,6.355A6.355,6.355,0,1,1,6.355,0,6.355,6.355,0,0,1,12.71,6.355ZM8.94,3.96a1.3,1.3,0,0,0-1.751.3A.973.973,0,0,1,6.4,4.6a.973.973,0,0,1-.79-.336,1.3,1.3,0,0,0-1.75-.3A1.316,1.316,0,0,0,3.51,5.8L6.4,9.718,9.291,5.8a1.318,1.318,0,0,0-.35-1.843Z' fill='%23f8c200'/%3E%3C/svg%3E%0A");
    margin-right: 4px;
  }
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
