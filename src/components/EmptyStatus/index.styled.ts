import styled from 'styled-components';
import { mixins, colors } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.boxShadow()};
  background-color: #fff;
  border-radius: 4px;
  padding: 10rem 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: ${colors.B1};
    &:hover {
      text-decoration: underline;
    }
  }
`;

//export const Image = styled.div`
//  margin: 2rem;
//`;
//
//export const Title = styled.div`
//  font-weight: bolder;
//`;
//
//export const Body = styled.div`
//  a {
//    color: ${colors.B1};
//    &:hover {
//      text-decoration: underline;
//    }
//  }
//`;
