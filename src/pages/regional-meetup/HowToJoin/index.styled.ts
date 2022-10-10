import styled, { css } from 'styled-components';
import { Row, Space } from 'antd';

import { mixins } from '@tidb-community/ui';

import MyContainer from '~/components/Container';

export const Container = styled.div`
  padding: 32px 0;
`;

export const ContainerOuter = styled.div`
  background: linear-gradient(180deg, #d30000 -55.7%, rgba(252, 227, 0, 0) 100%);
  padding: 20px;
`;

export const ContainerInner = styled.div`
  background: linear-gradient(180deg, #f7f8f9 0%, rgba(247, 248, 249, 0) 129.56%);
  border-radius: 6px;
  padding: 70px 0;
  ${mixins.onMobile(css`
    padding: 32px 0;
  `)};
`;

export const Main = styled(MyContainer)`
  //background-color: #FFFFFF;
`;

export const Header = styled(Row)``;

export const Title = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 45px;
  /* identical to box height */
  color: #2c2c2c;
`;

export const Description = styled(Row)`
  margin-top: 48px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #565656;
`;

export const Action = styled(Row)`
  margin-top: 22px;
`;

export const Image = styled.div``;

export const ApplyDescription = styled.p`
  margin-top: 136px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height */
  color: #2c2c2c;
`;

export const Prize = styled(Space)`
  padding: 64px 32px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  ${mixins.onMobile(css`
    padding: 16px;
  `)};
`;

export const GiftsImage = styled.div`
  ${mixins.onDesktop(css`
    border-right: 1px solid #e0e0e0;
  `)};
  ${mixins.onMobile(css`
    border-bottom: 1px solid #e0e0e0;
  `)};
  img {
    width: 100%;
  }
`;

export const Advantage = styled(Space)``;
export const AdvantageIcon = styled.div`
  background: #f9d34f;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  color: #fff;
  font-weight: 700;
`;
export const AdvantageText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height */
  color: #565656;
`;
export const List = styled(Space)``;
