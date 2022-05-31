import React, { useContext } from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';

import * as Styled from './welcome.styled';
import { PageDataContext } from '~/context';
import { formatNumber } from './welcome.utils';
import { useIsSmallScreen } from '~/hooks';
import Anchor from '~/components/Anchor';

const Welcome = () => {
  const { data } = useContext(PageDataContext);
  const { isSmallScreen, breakpoint } = useIsSmallScreen();
  const { t } = useTranslation('page-home');

  const lang = t('welcome', { returnObjects: true });
  const { /*navs: navsLang,*/ numbers: numbersLang, howTo: howToLang } = lang;

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

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <Styled.Content>
        <Row gutter={[32, 32]} justify="center">
          <Col span={isSmallScreen ? 24 : 18}>
            <Styled.Title>{lang.title}</Styled.Title>
            <Styled.Intro>{lang.intro}</Styled.Intro>
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
          <h2>{howToLang.title}</h2>
          <ul>
            <li>
              <Anchor href={'https://docs.pingcap.com/zh/tidb/stable/overview'}>{howToLang.what}</Anchor>
            </li>
            <li>
              <Anchor href={'#learning'}>{howToLang.use}</Anchor>
            </li>
            <li>
              <Anchor href={'#contribution'}>{howToLang.contribute}</Anchor>
            </li>
          </ul>
        </Styled.Content>
      </Styled.HowTo>
    </Styled.Container>
  );
};

export default Welcome;
