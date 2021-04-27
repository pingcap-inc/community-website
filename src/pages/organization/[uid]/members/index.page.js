import React from 'react';
import { Button, Table } from 'antd';

import * as data from './members.data';
import * as Styled from './members.styled';
import Layout from 'pages/organization/layout';
import { CommunityHead } from 'components/head';

const Members = () => {
  const { dataSource, columns } = data;

  const tableProps = {
    dataSource,
    columns,
  };

  return (
    <>
      <CommunityHead title="企业成员" />

      <Layout>
        <Styled.Header>
          <Styled.Title>
            企业成员<span>{dataSource.length}</span>
          </Styled.Title>

          <Button type="primary" size="small">
            添加成员
          </Button>
        </Styled.Header>

        <Table {...tableProps} pagination={false} />
      </Layout>
    </>
  );
};

export default Members;
