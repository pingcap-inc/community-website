import styled from 'styled-components';
import { Col } from 'antd';
import { Styled } from '@tidb-community/ui';

const { Content, Title } = Styled;

export { Content, Title };

export const LeftPanel = styled(Col).attrs((props: { $reverseOnSmallScreen?: boolean }) => ({
  xs: { span: 24, order: props.$reverseOnSmallScreen ? 2 : 1 },
  md: { span: 13, order: 1 },
}))``;

export const RightPanel = styled(Col).attrs((props: { $reverseOnSmallScreen?: boolean }) => ({
  xs: { span: 24, order: props.$reverseOnSmallScreen ? 1 : 2 },
  md: { span: 8, order: 2 },
}))``;
