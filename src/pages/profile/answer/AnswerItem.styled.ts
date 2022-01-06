import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';

export const AnswerItem = styled.div`
  margin-bottom: 2rem;
  ${mixins.boxShadow()};
  background-color: #fff;
  border-radius: 4px;
  padding: 2rem;
`;

export const Title = styled.div`
  display: flex;
  ${mixins.typography('h2')};
`;

export const TitleText = styled.div`
  margin-left: 0.5rem;
`;

export const Summary = styled.div`
  margin: 0.5rem auto;
`;

export const Metadata = styled.div`
  display: flex;
  justify-content: flex-end;
`;
