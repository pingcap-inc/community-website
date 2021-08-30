import styled from 'styled-components';
import { Col } from 'antd';

export { Content, Title } from '~/pages/home/index.styled';

export const LeftPanel = styled(Col).attrs((props) => ({
  xs: { span: 24, order: props.reverseOnSmallScreen ? 2 : 1 },
  md: { span: 13, order: 1 },
}))``;

export const RightPanel = styled(Col).attrs((props) => ({
  xs: { span: 24, order: props.reverseOnSmallScreen ? 1 : 2 },
  md: { span: 8, order: 2 },
}))``;
