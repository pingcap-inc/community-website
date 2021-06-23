import * as R from 'ramda';
import Image from 'next/image';
import React from 'react';
import { Row, Col } from 'antd';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './learning.styled';
import { link as linkUtils } from '~/utils';

const Learning = () => {
  const router = useRouter();
  const { t } = useTranslation('page-community');

  const onBtnClick = R.curry(linkUtils.handleRedirect)(router, R.__, undefined, undefined);
  const { title, desc, btns } = t('learning', { returnObjects: true });
  const { pu: puBtn, docs: docsBtn } = btns;

  return (
    <Styled.Container>
      <Styled.Content>
        <Row gutter={[48, 32]} justify="space-between">
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
              <Styled.Button ghost onClick={(e) => onBtnClick(puBtn.link)}>
                {puBtn.label}
              </Styled.Button>
              <Styled.Button onClick={(e) => onBtnClick(docsBtn.link)}>{docsBtn.label}</Styled.Button>
            </Styled.Buttons>
          </Col>
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Learning;
