import styled from 'styled-components';
import { Button, Space } from 'antd';

export const Container = styled.div`
  width: 100%;
  background-color: #f7f8f9;
  padding: 64px 0;
`;

export const Card = styled.div``;

export const Carousel = styled.div`
  .slick-dots {
    right: -12px;
    button {
      background-color: #aaa !important;
    }
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 42px;
  color: #890707;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #2c2c2c;
`;

export const Actions = styled(Space)``;

export const JoinButton = styled(Button).attrs({
  type: 'primary',
})``;

export const NominateButton = styled(Button).attrs({
  type: 'link',
})``;
