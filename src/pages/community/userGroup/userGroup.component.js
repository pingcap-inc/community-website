import * as R from 'ramda';
import Image from 'next/image';
import React from 'react';
import { Row, Col } from 'antd';
import { useRouter } from 'next/router';

import * as Styled from './userGroup.styled';
import data from './userGroup.data';
import { link as linkUtils } from 'utils';

const Learning = () => {
  const router = useRouter();
  const { title, desc, btns } = data;
  const onBtnClick = R.curry(linkUtils.handleRedirect)(router);
  const { join: joinBtn, ask: askBtn } = btns;

  return (
    <Styled.Container>
      <Styled.Content>
        <Row gutter={[48, 32]} justify="space-between">
          <Col xs={24} md={14}>
            <Styled.Title>{title}</Styled.Title>

            <Styled.Desc>{desc}</Styled.Desc>

            <Styled.Buttons>
              <Styled.Button ghost onClick={e => onBtnClick(joinBtn.link)}>
                {joinBtn.label}
              </Styled.Button>
              <Styled.Button onClick={e => onBtnClick(askBtn.link)}>{askBtn.label}</Styled.Button>
            </Styled.Buttons>
          </Col>

          <Col xs={24} md={10}>
            <Image alt={title} src="/images/community/join.svg" width="455.5" height="336.5" />
          </Col>
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Learning;
