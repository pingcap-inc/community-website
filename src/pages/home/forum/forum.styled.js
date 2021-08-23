import AsktugSvg from './asktug.svg';
import styled from 'styled-components';
import { Col } from 'antd';
import { colors } from '@tidb-community/ui';

import { Section, Content, Title, ModuleTitle } from '~/pages/home/index.styled';

export { Content, Title, ModuleTitle };

export const Container = styled(Section)`
  && {
    background: ${colors.M2};
  }
`;

export const LeftPanel = styled(Col).attrs({
  sm: 24,
  md: 14,
})``;

export const RightPanel = styled(Col).attrs({
  sm: 24,
  md: 8,
})``;

export const Posts = styled.div`
  margin-bottom: 1rem;
`;

export const Module = styled.div`
  padding: 2rem 0 1.5rem;
  border-bottom: 1px solid ${colors.T2};

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: 0;
  }
`;

export const AsktugLogo = styled(AsktugSvg)`
  height: 29.5px;
  margin-right: 1rem;
  position: relative;
  top: 8px;
`;
