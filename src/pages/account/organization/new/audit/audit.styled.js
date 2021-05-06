import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';
import { Button as AntButton } from 'antd';

export const Page = styled.div`
  background-color: ${colors.M2};
  padding: 140px 0;
`;

export const Container = styled.div`
  background-color: ${colors.M2};
  margin: auto;
  max-width: 760px;
`;

export const Image = styled.img`
  display: block;
  margin: 80px auto;
  width: ${({ $width }) => $width}px;
`;

export const Hint = styled.p`
  ${mixins.typography('p2')};
  margin: auto;
  max-width: 400px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  text-align: center;
`;

export const Button = styled(AntButton).attrs(() => ({ type: 'primary' }))``;
