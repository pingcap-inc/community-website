import styled from 'styled-components';
import { Col } from 'antd';

export { Content, Title } from '~/pages/home/index.styled';

export const LeftPanel = styled(Col).attrs({
  sm: 24,
  md: 13,
})``;

export const RightPanel = styled(Col).attrs({
  sm: 24,
  md: 8,
})``;
