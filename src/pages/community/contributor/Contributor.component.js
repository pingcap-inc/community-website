import React from 'react';
import { Row, Col } from 'antd';

import * as Styled from './contributor.styled';
import data from './contributor.data';

const Contributor = () => (
  <Styled.Container>
    <Styled.Title>{data.title}</Styled.Title>

    <Row gutter={32} justify="center">
      {data.items.map(({ title }, idx) => (
        <Col key={idx} xs={24} sm={12} md={8}>
          <Styled.Card>{title}</Styled.Card>
        </Col>
      ))}
    </Row>
  </Styled.Container>
);

export default Contributor;
