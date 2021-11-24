import styled from 'styled-components';
import { colors, Styled } from '@tidb-community/ui';
import { Breadcrumb as AntdBreadcrumb } from 'antd';

const { Content } = Styled;

export { Content };

export const Container = styled.div`
  padding: 2rem 1rem;
`;

export const Breadcrumb = styled(AntdBreadcrumb)``;

export const Tab = styled.div`
  display: flex;
  padding: 1rem 0;
`;

export const List = styled.div``;

export const TabItem = styled.div`
  cursor: pointer;
  margin: 0 0.5rem;
  color: ${(props) => (props.selected ? colors.T7 : '')};
  border-bottom: ${(props) => (props.selected ? `4px solid ${colors.T7}` : 'none')};
`;

export const Item = styled.div`
  margin-bottom: 1rem;
`;
