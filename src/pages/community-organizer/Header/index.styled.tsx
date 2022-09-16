import styled, { css } from 'styled-components';
import { Button, Space } from 'antd';

import { mixins } from '@tidb-community/ui';

//import MyContainer from '~/components/Container'

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const CardContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 64px;
  ${mixins.onMobile(css`
    position: relative;
    top: 0;
    margin: 16px auto;
  `)};
`;

export const Card = styled.div`
  padding: 64px 56px;
  max-width: 1024px;
  width: 100%;
  ${mixins.onMobile(css`
    padding: 32px 16px;
  `)};
  background: rgba(247, 248, 249, 0.9);
  border: 1px solid #e0e0e0;
  border-radius: 6px;
`;

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
