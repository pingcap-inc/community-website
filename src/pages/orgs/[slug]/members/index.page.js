import React from 'react';
import useSWR from 'swr';
import { Button, Table } from 'antd';
import { useRouter } from 'next/router';

import * as Styled from './members.styled';
import Layout from 'pages/orgs/layout';
import { CommunityHead } from 'components/head';
import { columns } from './members.data';
import { featureToggle } from 'utils';
import { getDataSource } from './members.utils';

export const getServerSideProps = async ({ req }) => {
  const host = process.env.VERCEL_URL || req.headers.host;

  const isEabled = featureToggle.isFeatureEnabled({
    host,
    name: featureToggle.FEATURES.ORGANIZATOIN_MEMBERS,
  });

  if (!isEabled) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};

const Members = () => {
  const router = useRouter();
  const { data } = useSWR(['orgs.org.members', router.query]);

  const dataSource = getDataSource(data);

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
