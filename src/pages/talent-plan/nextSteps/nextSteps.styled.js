import styled from 'styled-components';
import { colors, mixins, Styled } from '@tidb-community/ui';
import { Button } from 'antd';

export const Container = styled(Styled.Section)`
  && {
    color: ${colors.M1};
    padding: 0;
  }
`;

export const Content = styled(Styled.Content)`
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const ProjectCard = styled.div`
  color: ${colors.F1};
  font-size: 14px;
  ${mixins.boxShadow()}
  border-radius: 4px;
  background-color: ${colors.M2};
  padding: 48px;
  margin-bottom: 1rem;
`;

export const ProjectCardContent = styled.div`
  padding-bottom: 3rem;
  position: relative;
`;

export const ProjectCardTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 1rem;
`;

export const ProjectCardButton = styled(Button).attrs({ type: 'primary' })`
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
`;
