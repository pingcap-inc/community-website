import styled from 'styled-components';
//import {  } from 'antd';
import { Styled, constants } from '@tidb-community/ui';

const { Content } = Styled;

export { Content };

export const Container = styled.div`
  display: flex;
  padding: 2rem 1rem;
  @media screen and (max-width: ${constants.breakPoints.md}) {
    flex-direction: column;
    padding: 1rem 0.5rem;
    & > div {
      width: 100%;
    }
  }
  //@media screen and (min-width: (${constants.breakPoints.md} + 1)) {
  //  padding: 2rem 1rem;
  //}
`;

export const Start = styled.div`
  width: 340px;
`;

export const End = styled.div`
  width: calc(100% - 350px);
  margin-left: 2rem;
  @media screen and (max-width: ${constants.breakPoints.md}) {
    margin-top: 2rem;
    margin-left: 0;
  }
`;
