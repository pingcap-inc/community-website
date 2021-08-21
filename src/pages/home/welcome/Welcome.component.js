import React from 'react';
import { useTranslation } from 'next-i18next';
import { Col, Radio, Row } from 'antd';

import * as Styled from './welcome.styled';
import { useIsSmallScreen } from '~/pages/home/index.hooks';

const Welcome = () => {
  const isSmallScreen = useIsSmallScreen();
  const { t } = useTranslation('page-home');

  const lang = t('welcome', { returnObjects: true });
  const { navs: navsLang, numbers: numbersLang } = lang;

  const numbers = [
    {
      num: '35,000+',
      text: numbersLang.pr,
    },
    {
      num: '10,000+',
      text: numbersLang.topic,
    },
    {
      num: '75,000+',
      text: numbersLang.post,
    },
    {
      num: '1,400+',
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
    </Styled.Container>
  );
};

export default Welcome;
