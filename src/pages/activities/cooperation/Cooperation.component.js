import React from 'react';
import { Col, Row } from 'antd';

import * as Styled from './cooperation.styled';

const Cooperation = () => (
  <Styled.Container>
    <Styled.Content>
      <Styled.LeftPanel>
        <Row>
          <Styled.LeftPanel>Left</Styled.LeftPanel>
          <Col>Right</Col>
        </Row>
      </Styled.LeftPanel>
    </Styled.Content>
  </Styled.Container>
);

export default Cooperation;
