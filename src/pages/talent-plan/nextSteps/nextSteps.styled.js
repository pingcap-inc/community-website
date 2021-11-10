import styled from 'styled-components';
import { colors, Styled } from '@tidb-community/ui';
import { Button } from 'antd';

export const Container = styled(Styled.Section)`
  && {
    color: ${colors.M1};
    padding: 0;
  }
`;

export const Content = styled(Styled.Content)`
  position: relative;
  padding: 1rem 1rem 2rem;
`;

export const ProjectCard = styled.div`
  color: ${colors.F1};
  font-size: 14px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
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
