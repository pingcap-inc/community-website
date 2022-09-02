import styled from 'styled-components';
//import { mixins } from '@tidb-community/ui';
import { Space } from 'antd';
import * as React from 'react';
import Anchor from '~/components/Anchor';

export const Container = styled.div.attrs({})``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 52px 0;
  background: url('./banner_background.png') center no-repeat;
`;

export const HeaderStart = styled.div``;

export const HeaderStartTitle = styled.div`
  padding-left: 100px;
  display: flex;
  align-items: center;
`;

export const HeaderStartButton = styled(Space).attrs({
  size: [44, 44],
})`
  padding-left: 100px;
  margin-top: 52px;
  color: #fff;
`;

export const HeaderStartButtonSignUp = styled(Anchor)`
  padding: 6px 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background: #f67200;
  color: #fff;
  &:hover {
    color: #fff;
  }
`;

export const HeaderStartButtonJoinGroup = styled.div`
  color: #f67200;
`;

export const HeaderStartButtonAsk = styled.div`
  color: #f67200;
`;

export const HeaderStartNav = styled(Space).attrs({
  size: [24, 24],
  split: <span style={{ color: '#FFF' }}>|</span>,
  align: 'center',
})`
  margin-top: 70px;
  padding-left: 100px;
  display: flex;
  align-items: center;
  height: 48px;
  background: linear-gradient(90deg, #3940ea 0%, rgba(57, 64, 234, 0) 100%);
  a {
    color: #fff;
  }
`;

export const HeaderStartNavItem = styled.a`
  color: #fff;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.3em;
`;

export const HeaderEnd = styled.div`
  padding: 0 100px;
`;
