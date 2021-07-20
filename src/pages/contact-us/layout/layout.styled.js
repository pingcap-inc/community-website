import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  background: ${colors.M2};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  flex: 1;
  background: ${colors.M1};
  margin-top: 3rem;
  padding: 2.5rem 2rem;

  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-result-subtitle {
    ${mixins.typography('p1')};
  }

  .ant-input-number {
    width: 100%;
  }
`;

export const Header = styled.div`
  margin-bottom: 2rem;

  h1,
  p {
    ${mixins.reset()};
  }

  h1 {
    ${mixins.typography('p2')};
    color: ${colors.F1};
  }

  p {
    ${mixins.typography('p3')};
    color: ${colors.C4};
  }
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
