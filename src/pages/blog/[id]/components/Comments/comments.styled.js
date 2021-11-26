import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

export const CommentsContainer = styled.div`
  padding: 30px 37px;
  background: white;
  border-radius: 6px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
`;

export const LoginAlert = styled.div`
  font-size: 16px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 1rem 2rem;
  background-color: #fff0f0;
  border-radius: 6px;
  overflow: hidden;
  a {
    font-size: 16px;
    color: ${colors.B1};
  }
`;
