import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  background: ${colors.M2};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Card = styled.div`
  ${mixins.boxShadow()};
  border-top: 4px solid ${(props) => props.color};
  border-bottom: 4px solid ${(props) => props.color};
  padding: 1rem;
  border-radius: 4px;
  overflow: hidden;
`;

export const CardTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const CardParagraph = styled.h1`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const CardComment = styled.h1`
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  color: gray;
`;
