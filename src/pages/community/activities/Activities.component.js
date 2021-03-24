import React from 'react';
import { ActivityCards } from '@pingcap/pingcap-ui';
import { Row } from 'antd';

import * as Styled from './activities.styled';
import * as data from './activities.data';

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

    <ActivityCards activities={data.activies} />
  </Styled.Container>
);

export default Activities;
