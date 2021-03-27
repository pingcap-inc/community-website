import React from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';

import * as Styled from './learning.styled';
import data from './learning.data';

const Learning = () => {
  const { title, desc, btns } = data;

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
          </Col>
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Learning;
