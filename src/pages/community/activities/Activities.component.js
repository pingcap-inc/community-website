import React from 'react';
import { Row, Col } from 'antd';

import * as Styled from './activities.styled';

const Activities = () => (
  <Styled.Container>
    <Row justify="center">
      <Styled.Header xs={24} md={12}>
        <Styled.Title>Meet the TiDB Community</Styled.Title>
        <Styled.Desc>
          Meet other TiDB Community members IRL and online. Meet like-minded friends, share practical cases and
          technical experience.
        </Styled.Desc>
      </Styled.Header>
    </Row>

    <Row justify="center">
      <Col xs={24} sm={12} md={8}>
        <Styled.Card>1</Styled.Card>
        <Styled.Card>2</Styled.Card>
        <Styled.Card>3</Styled.Card>
      </Col>
    </Row>
  </Styled.Container>
);

export default Activities;
