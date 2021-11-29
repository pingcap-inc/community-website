import styled from 'styled-components';
import { mixins, colors, Styled, constants } from '@tidb-community/ui';
import { Space } from 'antd';

const { Content } = Styled;

export { Content };

export const Container = styled.div`
  background-color: ${colors.M1};
  padding: 1rem;
  margin: 1rem auto;
`;

export const Info = styled(Space)``;

export const Title = styled.h1``;

export const Author = styled.div`
  margin-left: 1rem;
  img {
    width: 2rem;
    height: 2rem;
  }
  a {
    margin-left: 0.5rem;
  }
`;

export const Action = styled(Space)``;
