import * as R from 'ramda';
import React from 'react';
import { ActivityCards } from '@pingcap/pingcap-ui';
import { Row } from 'antd';
import { useRouter } from 'next/router';

import * as Styled from './activities.styled';
import * as data from './activities.data';
import { link as linkUtils } from 'utils';

const Activities = () => {
  const router = useRouter();

  const activityCardsProps = {
    onCardClick: R.curry(linkUtils.handleRedirect)(router),
    activities: data.activities
  };

  return (
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

      <ActivityCards {...activityCardsProps} />
    </Styled.Container>
  );
};

export default Activities;
