import styled, { css } from 'styled-components';
import { Row } from 'antd';

import { mixins } from '@tidb-community/ui';

import MyContainer from '~/components/Container';

export const Container = styled(MyContainer)`
  padding-top: 80px;
  padding-bottom: 134px;
  ${mixins.onMobile(css`
    padding: 32px 16px;
  `)};
`;

export const Recommend = styled(Row)`
  margin-top: 48px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 45px;
  /* identical to box height */
  color: #2c2c2c;
`;

export const RecommendTitle = styled.div`
  margin-top: 8px;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  /* identical to box height */
  color: #000000;
`;

export const RecommendTag = styled.div`
  padding: 6px 16px;
  background: #eaedf0;
  border: 1px solid #e1e3e9;
  border-radius: 6px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #8f8f8f;
`;

export const RecommendPeople = styled.div`
  margin-top: 36px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #565656;
`;

export const RecommendSummary = styled.div`
  margin-top: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #565656;
`;

export const RecommendDate = styled.div`
  margin-top: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #565656;
`;

export const RecommendAction = styled.div`
  margin-top: 36px;
`;

export const List = styled(Row)`
  margin-top: 54px;
  //${mixins.onMobile(css`
    //  display: none;
    //
  `)};
`;

export const More = styled.div`
  padding-top: 32px;
  text-align: center;
`;

export const VideoCover = styled.div``;

export const Info = styled.div``;

export const InfoTag = styled.div`
  padding: 2px 12px;
  background: #eaedf0;
  border: 1px solid #e1e3e9;
  border-radius: 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height */
  color: #8f8f8f;
`;

export const InfoTitle = styled.div`
  margin-top: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #2c2c2c;
`;

export const InfoPeople = styled.div`
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height */
  color: #565656;
`;

export const InfoDate = styled.div`
  margin-top: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height */
  color: #565656;
`;
