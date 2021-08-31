import React, { useContext } from 'react';
import { Col, Radio, Row } from 'antd';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './welcome.styled';
import { PageDataContext } from '~/context';
import { formatNumber } from './welcome.utils';
import { link as linkUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';

const Welcome = () => {
  const router = useRouter();
  const { data } = useContext(PageDataContext);
  const { isSmallScreen, breakpoint } = useIsSmallScreen();
  const { t } = useTranslation('page-home');

  const lang = t('welcome', { returnObjects: true });
  const { navs: navsLang, numbers: numbersLang, howTo: howToLang } = lang;

  const { githubInfo } = data;

  const numbers = [
    {
      num: formatNumber(githubInfo.prNum),
      text: numbersLang.pr,
    },
    {
      num: formatNumber(githubInfo.topicNum),
      text: numbersLang.topic,
    },
    {
      num: formatNumber(githubInfo.postNum),
      text: numbersLang.post,
    },
    {
      num: formatNumber(githubInfo.contributorNum),
      text: numbersLang.contributor,
    },
  ];

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <Styled.Content>
        <Row gutter={[32, 32]} justify="center">
          <Col span={isSmallScreen ? 24 : 18}>
            <Styled.Title>{lang.title}</Styled.Title>
            <Styled.Intro>{lang.intro}</Styled.Intro>
            <Styled.Navs>
              <Radio.Button>{navsLang.codeOfConduct}</Radio.Button>
              <Radio.Button>{navsLang.join}</Radio.Button>
              <Radio.Button>{navsLang.contactUs}</Radio.Button>
            </Styled.Navs>
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
          <h2>{howToLang.title}</h2>
          <ul>
            <li onClick={onClick('https://docs.pingcap.com/zh/tidb/stable/overview')}>{howToLang.what}</li>
            <li>{howToLang.use}</li>
            <li>{howToLang.contribute}</li>
          </ul>
        </Styled.Content>
      </Styled.HowTo>
    </Styled.Container>
  );
};

export default Welcome;
