import styled from 'styled-components';
import { colors } from '@tidb-community/ui';
import { Tabs } from 'antd';

export const FavoriteTypeTab = styled.div`
  margin: 1rem 0;
`;

export const Tab = styled(Tabs)`
  .ant-tabs-nav:before {
    border-bottom-color: ${colors.C2};
  }
  .ant-tabs-tab {
    padding: 1rem 0.5rem;
  }
`;

/*export const TabItem = styled.a`
  display: block;
  padding: 0.5rem 2rem;
  margin-right: 1rem;
  background-color: ${({ selected }) => (selected ? colors.M1 : colors.C2)};
  color: ${({ selected }) => (selected ? colors.B1 : colors.F1)};
  border: 1px solid ${colors.C4};
`;*/
