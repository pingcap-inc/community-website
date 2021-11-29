import styled from 'styled-components';
import { mixins, colors, Styled, constants } from '@tidb-community/ui';
import { Breadcrumb as AntdBreadcrumb } from 'antd';

const { Content } = Styled;

export { Content };

export const Container = styled.div`
  //background-color: ${colors.M2};
  padding: 1rem;
`;

export const Breadcrumb = styled(AntdBreadcrumb)``;
