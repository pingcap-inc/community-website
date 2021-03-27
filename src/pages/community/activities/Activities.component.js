import * as R from 'ramda';
import Image from 'next/image';
import React from 'react';
import { ActivityCards } from '@pingcap/pingcap-ui';
import { Row } from 'antd';
import { useRouter } from 'next/router';

import data from './activities.data';
import * as Styled from './activities.styled';
import { link as linkUtils } from 'utils';

export const Header = ({ title, desc }) => (
  <Row justify="center">
    <Styled.Header xs={24} md={12}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Desc>{desc}</Styled.Desc>
    </Styled.Header>
  </Row>
);

const Activities = () => {
  const router = useRouter();

  const activityCardsProps = {
    activities: data.activities,
    onCardClick: R.curry(linkUtils.handleRedirect)(router),
    renderImage: ({ img, title }) => <Image alt={title} src={img} layout="fill" objectFit="cover" />
  };

  return (
    <Styled.Container>
      <Header {...R.pick(['title', 'desc'], data)} />
      <ActivityCards {...activityCardsProps} />
    </Styled.Container>
  );
};

export default Activities;
