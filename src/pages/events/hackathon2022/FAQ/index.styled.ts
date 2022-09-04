import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';

export const Container = styled.div.attrs({})`
  width: 100%;
`;

export const List = styled.div.attrs({})`
  width: 100%;
`;

export const Item = styled.div`
  ${mixins.transition()};
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px dashed #82c1ed;
`;

export const Header = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Question = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;

const buttonSize = '28px';
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${buttonSize};
  height: ${buttonSize};
  color: #82c1ed;
  border: 1px solid #82c1ed;
  padding: 8px;
  border-radius: ${buttonSize};
`;

export const Body = styled.div<{ $show: boolean }>`
  //${mixins.transition(undefined, '500ms', 'linear')};
  width: 100%;
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  box-sizing: content-box;
  overflow: hidden;
  padding-top: 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  //line-height: 22px;
  /* F3 */
  color: #999999;
  ul {
    margin-bottom: 0;
  }
`;

export const Description = styled.div`
  text-align: center;
  margin-top: 80px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* F3 */
  color: #999999;
  a,
  a:hover {
    color: #82c1ed;
  }
`;
