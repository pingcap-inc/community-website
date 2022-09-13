import styled from 'styled-components';
import { Col, Row } from 'antd';
import Anchor from '~/components/Anchor';

export const Container = styled(Row).attrs({
  gutter: [32, 32],
})``;

export const Column = styled(Col).attrs({
  md: 6,
  sm: 12,
  xs: 24,
})``;

export const Item = styled(Anchor)`
  display: block;
  //width: 300px;
  //height: 200px;
  img {
    width: 100%;
    height: 100%;
    //width: 300px;
    //height: 200px;
  }
  //background-color: #fff;
`;
