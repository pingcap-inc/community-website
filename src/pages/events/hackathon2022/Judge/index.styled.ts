import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';
import { Row, Col } from 'antd';

export const Container = styled(Row).attrs({
  gutter: [32, 32],
})``;

export const Column = styled(Col).attrs({
  lg: 6,
  md: 8,
  sm: 12,
  xs: 24,
})``;

export const Item = styled.div`
  ${mixins.transition()};
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 304px;
  height: 100%;
  margin: 0 auto;
  padding: 50px 24px 24px 28px;
  /* M5 */
  background: #282a36;
  border: 1px solid rgba(0, 207, 113, 0.5);
`;

export const Profile = styled.div``;

const avatarSize = '150px';
export const Avatar = styled.div`
  ${mixins.transition()};
  img,
  svg {
    width: ${avatarSize};
    height: ${avatarSize};
  }
`;

export const Name = styled.div`
  ${mixins.transition()};
  margin-top: 44px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height, or 150% */
  text-align: center;
  /* M1 */
  color: #ffffff;
`;

export const Title = styled.div`
  ${mixins.transition()};
  margin-top: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  /* identical to box height, or 200% */
  letter-spacing: 0.1em;
  /* M1 */
  color: #ffffff;
`;

export const OverLayer = styled.div`
  //${mixins.transition()};
  position: absolute;
  //top: 0;
  //left: 0;
  //max-width: 304px;
  //padding: 60px 38px;
  padding: 0 32px;
  padding-bottom: 32px;
  text-align: left;
  //width: 100%;
  overflow: auto;
`;

export const OverLayerName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height, or 150% */
  /* M1 */
  color: #ffffff;
`;

export const OverLayerTitle = styled.div`
  padding-top: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  /* identical to box height, or 200% */
  letter-spacing: 0.1em;
  /* M1 */
  color: #ffffff;
`;

export const OverLayerQuotation = styled.div`
  //margin-top: 48px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
  color: #ffffff;
`;
