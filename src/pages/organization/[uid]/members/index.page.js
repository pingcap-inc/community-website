import React from 'react';
import { Button } from 'antd';

import * as Styled from './members.styled';
import Layout from 'pages/organization/layout';
import { CommunityHead } from 'components/head';

const Members = () => (
  <>
    <CommunityHead title="企业成员" />

    <Layout>
      <Styled.Header>
        <Styled.Title>
          企业成员<span>12</span>
        </Styled.Title>

        <Button type="primary" size="small">
          添加成员
        </Button>
      </Styled.Header>
    </Layout>
  </>
);

export default Members;
