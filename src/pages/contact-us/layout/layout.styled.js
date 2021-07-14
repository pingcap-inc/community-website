import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  background: ${colors.M2};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.div`
  ${mixins.centerBlock('600px')};
  flex: 1;
  background: ${colors.M1};
  margin-top: 3rem;
  padding: 2.5rem 2rem;
`;

export const Footer = styled.div`
  color: ${colors.F2};
  text-align: center;
  margin: 1rem 0 3rem;

  span {
    position: relative;
    top: 0.15em;
    font-size: 1.2em;
  }
`;
