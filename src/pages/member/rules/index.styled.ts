import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

export const Container = styled.div`
  padding: 1rem;
  border-radius: 6px;
  background-color: ${colors.M1};
  font-size: 14px;

  .title {
    text-align: center;
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.4rem;
    padding-top: 0.5rem;
  }

  a {
    text-decoration: none;
    color: ${colors.B1};
  }

  p.ps {
    color: ${colors.B1};
  }

  .red-backgroud {
    background-color: #efbebb;
  }

  table {
    width: 100%;
    border: 1px solid;
    border-collapse: collapse;
    text-align: center;
    margin-bottom: 12px;
    margin-top: 12px;
  }

  table h4 {
    margin: 0.5rem 0;
  }

  table td {
    border: 1px solid;
    padding: 0.5rem;
  }
`;
