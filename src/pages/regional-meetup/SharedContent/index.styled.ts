import styled, { css } from 'styled-components';
import { Row, Space } from 'antd';

import { mixins } from '@tidb-community/ui';

import MyContainer from '~/components/Container';

export const Container = styled.div`
  padding: 64px 0;
  ${mixins.onMobile(css`
    padding: 32px 16px;
  `)};
  background: #f7f8f9;
`;

export const Main = styled(MyContainer)``;

export const Title = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 32px;
  line-height: 45px;
  /* identical to box height */
  color: #2c2c2c;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 54px;
  .swiper-slide {
    height: 100%;
  }
  .swiper-pagination-bullet {
    width: 32px;
    border-radius: 4px;
    &-active {
      background-color: #777;
    }
  }
`;

export const List = styled(Row)``;

export const Card = styled.div`
  padding: 36px 24px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;
export const CardTitle = styled.div`
  ${mixins.lineClamp(2)};
  height: 64px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height */
  color: #000000;
`;
export const CardDescription = styled.div`
  ${mixins.lineClamp(2)};
  margin-top: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #565656;
`;
export const CardSplitLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin-top: 32px;
  margin-bottom: 24px;
`;
//const avatarSizePx = 120
export const CardAuthorAvatar = styled.div`
  //width: 120px;
  //height: 120px;
  //img {
  //  width: 100%;
  //  height: 100%;
  //}
`;
export const CardAuthorInfo = styled.div`
  margin-top: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #2c2c2c;
`;
export const CardIcons = styled(Space)`
  margin-top: 12px;
`;
export const CardMore = styled.div`
  margin-top: 24px;
`;
