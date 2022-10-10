import styled, { css } from 'styled-components';
import { colors, mixins, Styled } from '@tidb-community/ui';
import { Space } from 'antd';

export const Content = styled(Styled.Content)`
  display: flex;
  flex-direction: column;
  //align-items: center;
`;

export const Container = styled.div`
  background: ${colors.M2};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #2c2c2c;
  margin-top: 2rem;
  // ${mixins.onDesktop(css`
    //   width: calc(966px - 2rem);
    //
  `)};
  // ${mixins.onMobile(css`
    //   width: auto;
    //
  `)};
`;

export const List = styled(Space)`
  display: flex;
  justify-content: space-between;
  ${mixins.onDesktop(css`
    flex-direction: row;
    align-items: flex-start;
    & > div {
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  `)};
  ${mixins.onMobile(css`
    flex-direction: column;
    align-items: center;
    & > div {
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  `)};
`;

export const Card = styled.div`
  ${mixins.boxShadow()};
  background-color: #fff;
  border-top: 4px solid ${(props) => props.$color};
  border-bottom: 4px solid ${(props) => props.$color};
  //margin: 1rem;
  padding: 1.75rem;
  border-radius: 4px;
  overflow: hidden;
  width: 280px;
  height: 330px;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  color: #2c2c2c;
  margin-bottom: 1rem;
`;

export const CardGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const CardParagraph = styled.p`
  font-size: 16px;
  color: #565656;
  margin-bottom: 0.5rem;
  a {
    //color: ${colors.B1};
    font-size: 16px;
    color: #be1d32;
  }
`;

export const CardComment = styled.p`
  font-size: 12px;
  margin-bottom: 0.5rem;
  color: gray;
`;

export const Image = styled.div`
  margin-top: 4rem;
  margin-bottom: -8px;
  text-align: center;
  img {
    width: 100%;
    max-width: 600px;
  }
`;
