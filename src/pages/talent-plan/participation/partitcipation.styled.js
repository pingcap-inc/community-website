import styled, { css } from 'styled-components';
import { colors, Styled } from '@tidb-community/ui';
import { getImage } from '~/pages/talent-plan/talent-plan.utils';

export const Container = styled(Styled.Section)`
  && {
    color: ${colors.M1};
    padding: 0;
  }
`;

export const Content = styled(Styled.Content)`
  position: relative;
`;

export const ContainerGray = styled(Styled.Section)`
  && {
    background-color: ${colors.M2};
    color: ${colors.F1};
    padding: 0;
  }

  ${Content} {
    padding-top: 2rem;
  }
`;

export const StepBox = styled.div`
  // icon before the div
  &:before {
    content: '';
    display: block;
    background: url(${(props) => props.icon}) no-repeat;
    width: 32px;
    height: 32px;
    flex: 0 0 2em;
  }

  display: flex;
  align-items: flex-start;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

export const StepBoxInner = styled.div`
  margin-left: 1rem;
`;

export const StepBoxContent = styled.div`
  padding-top: 1rem;
`;

export const StepBoxHeader = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const PathCardWrapper = styled.div`
  padding-bottom: 1rem;
  // PM says the all the cards should be the same height...
  // ...so we need to set the height of the card here
  position: relative;
`;

export const PathCard = styled.div`
  text-decoration: none !important;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: ${colors.M2};

  cursor: pointer;
  height: 100%;

  padding: 1.5rem 1.5rem 1.5rem calc(1.5rem - 4px);
  border-left: 4px solid ${colors.M2};

  &:hover {
    border-left: 4px solid ${colors.B1};
  }
`;

export const PathCardHeader = styled.div`
  font-size: 18px;
  color: ${colors.B1};
  padding-bottom: 1rem;
`;

export const BecomingBox = styled.div`
  // icon before the div
  &:before {
    content: '';
    display: block;
    background: url(${getImage('participation-step-icon-1.svg')}) no-repeat;
    width: 24px;
    height: 24px;
    flex: 0 0 2em;
  }

  display: flex;
  align-items: flex-start;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

export const BecomingHeader = styled.div`
  font-size: 16px;
  padding-bottom: 1rem;
`;

export const BecomingBoxContent = styled.div`
  margin-left: 0.5rem;
  font-size: 14px;
`;

export const Becomings = styled.div`
  grid-template-columns: repeat(5, minmax(0, 1fr));
  ${(props) =>
    !props.isSmallScreen &&
    css`
      display: grid;
    `};
  padding-bottom: 1rem;
`;
