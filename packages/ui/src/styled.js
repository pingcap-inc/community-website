import styled, { css } from 'styled-components';

import * as colors from './colors';
import * as mixins from './mixins';

export const Section = styled.div`
  color: ${colors.F1};
  background: ${colors.M1};
  padding: 4rem 0 6rem;

  ${(props) =>
    props.isSmallScreen &&
    css`
      padding: 3rem 0;

      ${Title} {
        font-size: 24px;
        margin-bottom: 3rem;
        text-align: center;

        &::after {
          left: 50%;
          bottom: -10px;
          margin-left: -1.5rem;
        }
      }
    `}
`;

export const Content = styled.div`
  ${mixins.responsive()};
  width: 100%;
`;

export const Title = styled.h2`
  position: relative;
  font-size: 32px;
  margin-bottom: 4rem;

  && {
    font-weight: normal;
  }

  &::after {
    ${mixins.size('3rem', '10px')};
    content: '';
    background: ${colors.B1};
    position: absolute;
    bottom: -6px;
    left: 0;
  }
`;

export const ModuleTitle = styled.h3`
  ${mixins.flexVerticalCenter()};
  justify-content: space-between;
  line-height: 1;
  font-size: 20px;
  font-weight: normal !important;
  margin-bottom: 2rem;

  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}
`;

export const Text = styled.div`
  font-size: 16px;
  color: ${colors.F2};
`;

export const CenterOnSmallScreen = styled.div`
  width: 100%;

  ${(props) =>
    props.isSmallScreen &&
    css`
      ${mixins.centerBlock()}
      text-align: center;
    `}
`;
