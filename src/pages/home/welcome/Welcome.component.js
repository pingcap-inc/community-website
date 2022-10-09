import React, { useContext } from 'react';
import { Col, Row } from 'antd';

import * as Styled from './welcome.styled';
import { PageDataContext } from '~/context';
import { formatNumber } from './welcome.utils';
import { useIsSmallScreen } from '~/hooks';
import Anchor from '~/components/Anchor';

const Welcome = () => {
  const { data } = useContext(PageDataContext);
  const { isSmallScreen, breakpoint } = useIsSmallScreen();

  const { githubInfo } = data;

  const numbers = [
    {
      num: formatNumber(githubInfo.prNum),
      text: 'Pull Requests',
    },
    {
      num: formatNumber(githubInfo.topicNum),
      text: '主题',
    },
    {
      num: formatNumber(githubInfo.postNum),
      text: '帖子',
    },
    {
      num: formatNumber(githubInfo.contributorNum),
      text: '贡献者',
    },
  ];

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <Styled.Content>
        <Row gutter={[32, 32]} justify="center">
          <Col span={isSmallScreen ? 24 : 18}>
            <Styled.Title>Hi, 欢迎来到 TiDB 社区!</Styled.Title>
            <Styled.Intro>
              TiDB 社区是由 TiDB
              生态中的开发者、用户、Contributor、合作伙伴一起建立的分享、学习平台。在这里，我们可以自由发声，互相协助解决问题。
            </Styled.Intro>
            {/*<Styled.Navs>*/}
            {/*  <Radio.Button onClick={onClick('https://github.com/pingcap/community/blob/master/CODE_OF_CONDUCT.md')}>*/}
            {/*    {navsLang.codeOfConduct}*/}
            {/*  </Radio.Button>*/}
            {/*  <Radio.Button onClick={onClick('https://accounts.pingcap.com/')}>{navsLang.join}</Radio.Button>*/}
            {/*  <Radio.Button onClick={onClick('mailto:community@tidb.io')}>{navsLang.contactUs}</Radio.Button>*/}
            {/*</Styled.Navs>*/}
            <Styled.Numbers gutter={32} justify="center">
              {numbers.map(({ num, text }, idx) => (
                <Col key={idx} span={isSmallScreen ? 12 : 6}>
                  <em>{num}</em>
                  <span>{text}</span>
                </Col>
              ))}
            </Styled.Numbers>
          </Col>
        </Row>
      </Styled.Content>

      <Styled.HowTo isSmallScreen={!breakpoint.lg}>
        <Styled.Content>
          <h2>TiDB 新手？点击切换探索路径</h2>
          <ul>
            <li>
              <Anchor href={'https://docs.pingcap.com/zh/tidb/stable/overview'}>什么是 TiDB ？</Anchor>
            </li>
            <li>
              <Anchor href={'#learning'}>如何使用 TiDB ？</Anchor>
            </li>
            <li>
              <Anchor href={'#contribution'}>如何贡献代码 ？</Anchor>
            </li>
          </ul>
        </Styled.Content>
      </Styled.HowTo>
    </Styled.Container>
  );
};

export default Welcome;
