import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';
import { Col } from 'antd';

import LogoSvg from './logo.svg';
import { Section } from '~/pages/home/index.styled';

export const Container = styled(Section)`
  && {
    color: ${colors.M1};
    background: ${colors.B4};
    padding: 5rem 0 7.5rem;
  }
`;

export const Content = styled.div`
  ${mixins.responsive()};
  width: 100%;
`;

export const LeftPanel = styled(Col).attrs({
  md: 10,
  lg: 8,
})``;

export const RightPanel = styled(Col).attrs({
  md: 14,
  lg: 12,
})``;

export const Logo = styled(LogoSvg)`
  max-width: 350px;
  margin-bottom: 0.5rem;
`;

export const Intro = styled.p`
  ${mixins.reset()};
  color: ${colors.M1};
  font-size: 20px;
`;
