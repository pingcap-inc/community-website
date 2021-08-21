import React from 'react';
import { useTranslation } from 'next-i18next';
import { Col, Radio, Row } from 'antd';

import * as Styled from './welcome.styled';

const Welcome = () => {
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
    <Styled.Container>
      <Styled.Content>
        <Row justify="center">
          <Col span={18}>
            <Styled.Title>{lang.title}</Styled.Title>
            <Styled.Intro>{lang.intro}</Styled.Intro>
            <Radio.Group>
              <Radio.Button>{navsLang.codeOfConduct}</Radio.Button>
              <Radio.Button>{navsLang.join}</Radio.Button>
              <Radio.Button>{navsLang.contactUs}</Radio.Button>
            </Radio.Group>
            <Row>
              {numbers.map(({ num, text }, idx) => (
                <Col key={idx} md={6}>
                  <em>{num}</em>
                  <span>{text}</span>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Welcome;
