import * as R from 'ramda';
import Image from 'next/image';
import React from 'react';
import { ActivityCards, ViewMoreButton } from '@tidb-community/ui';
import { Row } from 'antd';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './activities.styled';
import { link as linkUtils } from '~/utils';

export const Header = ({ className, title, desc, children }) => (
  <Row className={className} justify="center">
    <Styled.Header xs={24} md={12}>
      <Styled.Title>{title || children}</Styled.Title>
      {desc && <Styled.Desc>{desc}</Styled.Desc>}
    </Styled.Header>
  </Row>
);

const Activities = () => {
  const router = useRouter();
  const { t } = useTranslation('page-community');

  const onLinkClick = R.curry(linkUtils.handleRedirect)(router, R.__, undefined, undefined);

  const headerProps = {
    title: t('activities.title'),
    desc: t('activities.desc'),
  };

  const activityCardsProps = {
    activities: t('activities.activities', { returnObjects: true }),
    onCardClick: onLinkClick,
    renderImage: ({ img, title }) => <Image alt={title} src={img} layout="fill" objectFit="cover" />,
  };

  return (
    <Styled.Container>
      <Header {...headerProps} />
      <ActivityCards {...activityCardsProps} />
      <Styled.ViewMoreWrapper>
        <ViewMoreButton onClick={(e) => onLinkClick('https://contributor.tidb.io/events')}>
          {t('activities.viewAll')}
        </ViewMoreButton>
      </Styled.ViewMoreWrapper>
    </Styled.Container>
  );
};

export default Activities;
