import styled from 'styled-components';
import { colors } from '@tidb-community/ui';
import { Space } from 'antd';
export const Container = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${colors.C2};
`;

export const Description = styled.div`
  color: ${colors.C4};
`;

export const List = styled(Space)`
  margin: 1rem 0;
`;
