import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';
import { Col } from 'antd';

export const MyContainer = styled.div``;

export const Section = styled.div``;

export const SectionTitle = styled.div`
  text-align: center;
`;

export const SectionBody = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
`;

export const Column = styled(Col).attrs({
  lg: 6,
  md: 8,
  sm: 12,
  xs: 24,
})``;

export const Item = styled.div`
  ${mixins.transition()};
  //overflow: auto;
  position: relative;
  padding: 16px 24px;
  #description {
    display: none;
    position: absolute;
    width: calc(100% - (3 * 24px));
  }
  &:hover {
    #basic {
      display: none;
    }
    #description {
      display: unset;
    }
  }
`;

const sizePxPadding = 10;
const sizePxWidth = 320;
const sizePxHeight = 180;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${sizePxPadding}px;
  border: 1px solid rgba(237, 237, 237, 0.2);
  //height: 100%;
  min-height: 332px;
  width: ${sizePxWidth + 2 * sizePxPadding}px;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Picture = styled.div`
  ${mixins.transition()};
  //width: 285px;
  //width: 160px * 1.25;
  //height: 90px * 1.25;
  width: ${sizePxWidth}px;
  height: ${sizePxHeight}px;
  background: #a56161;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.div`
  ${mixins.transition()};
  margin-top: 16px;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
`;

export const Bonus = styled.div`
  ${mixins.transition()};
  margin-top: 8px;
  font-weight: 400;
  font-size: 14px;
  /* M1 */
  color: #ffffff;
`;

export const Description = styled.div`
  ${mixins.transition()};
  width: 100%;
  font-size: 16px;
  line-height: 2;
  color: #ffffff;
`;

export const Action = styled.div<{ $color: string }>`
  //position: relative;
  margin-top: 24px;
  a {
    color: #fff;
    height: 24px;
    line-height: 1;
  }
  svg:hover,
  a:hover {
    color: ${({ $color }) => $color};
  }
`;

export const ActionItem = styled.div``;
