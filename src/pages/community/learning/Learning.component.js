import React from 'react';
import { Row, Col } from 'antd';

import * as Styled from './learning.styled';

const Learning = () => (
  <Styled.Container>
    <Styled.Content>
      <Row gutter={[32, 0]}>
        <Col xs={24} md={10}>
          Img Col
        </Col>
        <Col xs={24} md={14}>
          Main Col
        </Col>
      </Row>
    </Styled.Content>
  </Styled.Container>
);

export default Learning;
