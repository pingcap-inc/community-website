import React, { useRef } from 'react';
import { Row, Col } from 'antd';
import { useSize } from 'ahooks';

import * as Styled from './contributor.styled';
import data from './contributor.data';

const Card = ({ title, desc, imgId }) => {
  const ref = useRef();
  const size = useSize(ref);

  return (
    <Styled.Card ref={ref}>
      <Styled.CardImg small={size.width < 300}>
        <img alt={title} src={`/images/community/contributor-${imgId}.svg`} />
      </Styled.CardImg>
      <h3>{title}</h3>
      <p>{desc}</p>
    </Styled.Card>
  );
};

const Contributor = () => (
  <Styled.Container>
    <Styled.Title>{data.title}</Styled.Title>

    <Row gutter={[32, 32]} justify="center">
      {data.items.map(({ title, desc }, idx) => (
        <Col key={idx} xs={24} sm={12} md={8}>
          <Card title={title} desc={desc} imgId={idx + 1} />
        </Col>
      ))}
    </Row>
  </Styled.Container>
);

export default Contributor;
