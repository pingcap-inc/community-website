import React from 'react';
import useSWR from 'swr';
import { Button, Table } from 'antd';
import { api } from '@tidb-community/datasource';
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

  // TODO: The API call may be moved to _app.page.js because the response data will
  // be also consumed in global Header
  let me;
  try {
    me = await api.me();
  } catch (err) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      me,
    },
  };
};

const Members = ({ me }) => {
  const router = useRouter();
  const { data: membersResp } = useSWR(['orgs.org.members', router.query]);

  const dataSource = getDataSource({ membersResp, me });

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
