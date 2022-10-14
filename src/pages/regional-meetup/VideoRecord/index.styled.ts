import styled, { css } from 'styled-components';
import { Row, Space } from 'antd';

import { colors, mixins } from '@tidb-community/ui';

import MyContainer from '~/components/Container';
import { PlayCircleFilled } from '@ant-design/icons';

export const Container = styled(MyContainer)`
  padding: 32px 16px;
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
  margin-top: 16px;
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

export const IconWrapper = styled(Space)`
  font-size: 14px;
  color: ${colors.C4};
`;

export const VideoBox = styled.div<{ $src: string; $isSmallScreen: boolean }>`
  position: relative;
  background-size: 100% 100%;
  //padding-bottom: 62.8%;
  width: 160px;
  height: 100px;
  background-image: url(${({ $src }) => $src});
  border-color: ${colors.M1};

  ${(props) =>
    !props.$isSmallScreen &&
    css`
      box-shadow: inset 0 0 0 8px ${colors.M1};
    `}
`;

export const VideoPlayButton = styled.div`
  ${mixins.flexCenter()};
  ${mixins.flexVerticalCenter()};
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const VideoPlayIcon = styled(PlayCircleFilled)`
  font-size: 2rem;
  color: ${colors.F1};
  opacity: 46%;

  &:hover {
    color: ${colors.F2};
    cursor: pointer;
  }
`;
