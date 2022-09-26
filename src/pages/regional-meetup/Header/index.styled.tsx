import styled from 'styled-components';
import { Button, Space } from 'antd';

export const Container = styled.div`
  width: 100%;
  background-color: #f7f8f9;
  padding: 64px 0;
`;

export const Card = styled.div``;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 56px;
  color: #890707;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #2c2c2c;
`;

export const Actions = styled(Space)``;

export const JoinButton = styled(Button).attrs({
  type: 'primary',
})``;

export const NominateButton = styled(Button).attrs({
  type: 'link',
})``;
