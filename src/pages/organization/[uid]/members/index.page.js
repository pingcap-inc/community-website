import * as R from 'ramda';
import React from 'react';
import { Button, Table } from 'antd';

import * as data from './members.data';
import * as Styled from './members.styled';
import Layout from 'pages/organization/layout';
import { CommunityHead } from 'components/head';

const Members = () => {
  const tableProps = R.pick(['dataSource', 'columns'], data);

  return (
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

        <Table {...tableProps} />
      </Layout>
    </>
  );
};

export default Members;
