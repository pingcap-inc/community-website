import React, { useRef } from 'react';
import { Row, Col } from 'antd';
import { useRouter } from 'next/router';
import { useSize } from 'ahooks';
import { useTranslation } from 'next-i18next';

import * as Styled from './contributor.styled';
import { link as linkUtils } from '~/utils';

const Card = ({ title, desc, link, imgId }) => {
  const ref = useRef();
  const size = useSize(ref);
  const router = useRouter();

  const onClick = (e) => linkUtils.handleRedirect(router, link);

  return (
    <Styled.Card ref={ref} onClick={onClick}>
      <Styled.CardImg small={size.width < 300}>
        <img alt={title} src={`/images/community/contributor-${imgId}.svg`} />
      </Styled.CardImg>
      <h3>{title}</h3>
      <p>{desc}</p>
    </Styled.Card>
  );
};

const Contributor = () => {
  const { t } = useTranslation('page-community');

  return (
    <Styled.Container>
      <Styled.Title>{t('contributor.title')}</Styled.Title>

      <Row gutter={[32, 32]} justify="center">
        {t('contributor.items', { returnObjects: true }).map(({ title, desc, link }, idx) => {
          const cardProps = {
            desc,
            imgId: idx + 1,
            link,
            title,
          };

          return (
            <Col key={idx} xs={24} sm={12} md={8}>
              <Card {...cardProps} />
            </Col>
          );
        })}
      </Row>
    </Styled.Container>
  );
};

export default Contributor;
