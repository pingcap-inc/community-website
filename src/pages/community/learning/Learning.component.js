import * as R from 'ramda';
import Image from 'next/image';
import React from 'react';
import { Row, Col } from 'antd';
import { useRouter } from 'next/router';

import * as Styled from './learning.styled';
import data from './learning.data';
import { link as linkUtils } from 'utils';

const Learning = () => {
  const router = useRouter();
  const { title, desc, btns } = data;
  const onBtnClick = R.curry(linkUtils.handleRedirect)(router);

  return (
    <Styled.Container>
      <Styled.Content>
        <Row gutter={[32, 0]}>
          <Col xs={24} md={10}>
            <Image alt={title} src="/images/community/learn.svg" width="452" height="247" />
          </Col>

          <Col xs={24} md={14}>
            <Styled.Title>{title}</Styled.Title>

            <Styled.Desc>
              {desc.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </Styled.Desc>

            <Styled.Buttons>
              <Styled.Button ghost onClick={e => onBtnClick(btns.pu.link)}>
                {btns.pu.label}
              </Styled.Button>
              <Styled.Button onClick={e => onBtnClick(btns.docs.link)}>{btns.docs.label}</Styled.Button>
            </Styled.Buttons>
          </Col>
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Learning;
