import styled, { css } from 'styled-components';
import { Styled } from '@tidb-community/ui';

const { ModuleTitle, Section } = Styled;

export { ModuleTitle };

export const Container = styled(Section)``;

export const Module = styled.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ActivitiesBox = styled.div`
  ${(props) =>
    props.isSmallScreen &&
    css`
      margin-bottom: 2rem;
    `}
`;
