import styled from 'styled-components';
import { colors, mixins, Styled } from '@tidb-community/ui';

const { Content } = Styled;

export { Content };

export const Container = styled.div`
  background: ${colors.M2};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 2rem 0;
`;

export const Card = styled.div`
  ${mixins.boxShadow()};
  background-color: #FFF;
  border-top: 4px solid ${(props) => props.color};
  border-bottom: 4px solid ${(props) => props.color};
  padding: 1.75rem;
  border-radius: 4px;
  overflow: hidden;
  height: 260px;
`;

export const CardTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const CardParagraph = styled.p`
  font-size: 14px;
  margin-bottom: 0.5rem;
  a {
    color: ${colors.B1};
  }
`;

export const CardComment = styled.p`
  font-size: 12px;
  margin-bottom: 0.5rem;
  color: gray;
`;
