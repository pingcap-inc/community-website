import styled, { css } from 'styled-components';
import { mixins } from '@tidb-community/ui';
import { Row, Col, Space } from 'antd';
import Anchor from '~/components/Anchor';

export const button = () => css``;

export const ButtonPrimary = styled(Anchor)`
  ${mixins.transition()};
  padding: 6px 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  background-color: #82c1ed;
  color: #ffffff !important;
  border: 1px solid #82c1ed;
  &:hover {
    background-color: #00cf71;
    border-color: #00cf71;
  }
  a {
  }
`;

export const ButtonDiv = styled.div`
  ${mixins.transition()};
  padding: 6px 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  color: #82c1ed;
  border: 1px solid #82c1ed;
  cursor: pointer;
  &:hover {
    color: #00cf71;
    border-color: #00cf71;
  }
`;

export const Button = styled(Anchor)`
  ${mixins.transition()};
  padding: 6px 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  color: #82c1ed;
  border: 1px solid #82c1ed;
  &:hover {
    color: #00cf71;
    border-color: #00cf71;
  }
`;

export const Container = styled(Row).attrs({
  gutter: [32, 32],
})`
  //overflow: hidden;
  //padding-bottom: 8px;
`;

export const Column = styled(Col).attrs({
  md: 8,
  sm: 12,
  xs: 24,
})``;

export const Item = styled.div`
  ${mixins.transition()};
  /* M5 */
  background: #282a36;
  border: 1px solid rgba(237, 237, 237, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 34px 40px 24px 40px;
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */
    color: #82c1ed;
  }
`;

export const Start = styled.div``;

export const End = styled(Space).attrs({
  size: [40, 40],
})`
  margin-top: 20px;
  a:hover {
    color: #00cf71;
  }
`;

export const Step = styled.div<{ $active: boolean }>`
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  /* identical to box height, or 150% */
  letter-spacing: 0.2em;
  color: ${({ $active }) => ($active ? '#82C1ED' : 'rgba(255, 255, 255, 0.2)')};
`;

export const Title = styled.div`
  margin-top: 6px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height */
  color: #82c1ed;
`;

export const Date = styled.div`
  //display: flex;
  //align-items: flex-start;
  svg {
    position: relative;
    top: 4px;
    margin-right: 8px;
  }
  margin-top: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
  /* M1 */
  color: #ffffff;
`;

export const Paragraph = styled.div`
  margin-top: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
  /* F3 */
  color: #999999;
`;
