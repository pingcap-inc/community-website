import styled from 'styled-components';
//import {  } from 'antd';
import { Styled, constants } from '@tidb-community/ui';

const { Content } = Styled;

export { Content };

export const Container = styled.div`
  display: flex;
  @media screen and (max-width: ${constants.breakPoints.md}) {
    padding: 1rem 0;
  }

  @media screen and (min-width: ${constants.breakPoints.md}) {
    padding: 2rem 0;
  }
`;

export const Start = styled.div`
  width: 340px;
`;

export const End = styled.div`
  width: calc(100% - 350px);
  margin-left: 2rem;
`;
