import styled, { css } from 'styled-components';
import { mixins } from '@tidb-community/ui';
import { Space } from 'antd';
import * as React from 'react';

import Anchor from '~/components/Anchor';
import bannerBackgroundImage from './banner_background.png';

export const Container = styled.div.attrs({})``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 52px 0;
  background: url(${bannerBackgroundImage.src}) center no-repeat;
`;

export const HeaderStart = styled.div``;

export const HeaderEnd = styled.div`
  ${mixins.onDesktop(css`
    padding: 0 100px;
  `)};
  ${mixins.onMobile(css`
    padding: 16px;
    display: none;
  `)};
  img {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderStartTitle = styled.div`
  ${mixins.onDesktop(css`
    padding-left: 100px;
  `)};
  ${mixins.onMobile(css`
    padding: 16px;
  `)};
  //width: 100%;
  display: flex;
  align-items: center;
  img {
    z-index: 1;
    width: 100%;
    height: 100%;
  }
`;

export const HeaderStartImage = styled.div`
  ${mixins.onDesktop(css`
    display: none;
  `)};
  ${mixins.onMobile(css`
    display: block;
    padding: 16px;
    margin-top: -64px;
  `)};
  //width: 100%;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderStartButton = styled(Space).attrs({
  size: [44, 44],
  wrap: true,
})`
  ${mixins.onDesktop(css`
    padding-left: 100px;
  `)};
  ${mixins.onMobile(css`
    padding: 16px;
  `)};
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
  ${mixins.onDesktop(css`
    padding-left: 100px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 70px;
  `)};
  ${mixins.onMobile(css`
    padding: 16px;
    margin-top: 48px;
  `)};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
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
