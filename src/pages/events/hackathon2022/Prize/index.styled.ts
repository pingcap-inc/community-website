import styled from 'styled-components';
import { Col, Row } from 'antd';

import normalImage from './normal.png'

export const Container = styled.div``;

export const Description = styled.div`
  margin-top: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  text-align: center;
  /* F3 */
  color: #999999;
`;

export const SpecialPrizeTitle = styled.div`
  margin-top: 78px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.2em;
  color: #ffffff;
`;

export const SpecialPrizeTitleFirst = styled.div`
  margin-top: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  text-align: center;
  /* F3 */
  color: #999999;
`;

export const SpecialPrizeTitleSecond = styled.div`
  margin-top: 74px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  text-align: center;
  /* F3 */
  color: #999999;
`;

export const SpecialPrizeTopList = styled(Row).attrs({
  gutter: [118, 118],
  align: 'center',
})`
  margin-top: 56px;
`;

export const SpecialPrizeTopListColumn = styled(Col).attrs({
  lg: 6,
  md: 12,
  sm: 12,
  xs: 24,
})`
  
`;

export const SpecialPrizeTopListColumnItem = styled.div`
  background-image: url(${normalImage.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 252px;
  height: 272px;
  text-align: center;
  padding-top: 44px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const SpecialPrizeTopListColumnItemName = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  height: 22px;
  text-align: center;
  letter-spacing: 0.2em;
  color: #FFFFFF;
`;

export const SpecialPrizeTopListColumnItemThing = styled.div`
  margin-top: 48px;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  /* identical to box height */
  text-align: center;
  color: #FFFFFF;
`;

export const SpecialPrizeTopListColumnItemTarget = styled.div`
  margin-top: 32px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
`;

export const SpecialPrizeTopListItemGold = styled.div`
  background-image: url("./gold.png");
  
`;

export const SpecialPrizeTopListItemSliver = styled.div`
  background-image: url("./sliver.png");
  
`;

export const SpecialPrizeTopListItemBronze = styled.div`
  background-image: url("./bronze.png");
  
`;

export const SpecialPrizeDescription = styled.div`
  margin-top: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  text-align: center;
  /* F3 */
  color: #999999;
`;

export const Title = styled.div`
  width: 100%;
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  /* F3 */
  color: #999999;
`;

export const List = styled(Row).attrs({
  gutter: [64, 64],
})`
  margin-top: 26px;
`;

export const Column = styled(Col).attrs({
  md: 4,
  sm: 8,
  xs: 12,
})``;

export const Item = styled.div`
  width: 160px;
  height: 80px;
  background-color: #fff;
`;

export const Footer = styled.div`
  margin-top: 74px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  text-align: center;
  /* F3 */
  color: #999999;
  a, a:hover {
    color: #888DFF;
    text-decoration: underline;
  }
`;
