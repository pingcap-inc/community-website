import React from 'react';
import useSWR from 'swr';
import { Button, Modal, Table } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
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
  let meResp;
  try {
    meResp = await api.me();
  } catch (err) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      meResp,
    },
  };
};

const Members = ({ meResp }) => {
  const router = useRouter();
  const { slug } = router.query;
  const { data: membersResp, mutate } = useSWR(['orgs.org.members', router.query]);

  const onRoleChange = async ({ id, role }) => {
    try {
      await api.orgs.org.updateMemberRole({ role, slug, userId: id });
      mutate(
        {
          ...membersResp,
          data: membersResp.data.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                role,
              };
            }
            return item;
          }),
        },
        false
      );
    } catch (err) {}
  };

  const onDelete = ({ id, isMyself }) => {
    const config = {
      title: '确定要删除该成员吗？',
      icon: <ExclamationCircleOutlined />,
      content: '删除后，该成员将不在享有企业权益',
      okText: '确定',
      cancelText: '取消',

      async onOk() {
        try {
          await api.orgs.org.removeMember({ slug, userId: id });
          mutate(
            {
              ...membersResp,
              data: membersResp.data.filter((item) => item.id !== id),
            },
            false
          );
        } catch (err) {}
      },
    };

    Modal.confirm({
      ...config,
      ...(isMyself && {
        title: '确定要退出该企业吗？',
        content: '退出企业后将不在享有企业权益',
      }),
    });
  };

  const dataSource = getDataSource({ membersResp, meResp, onDelete, onRoleChange });

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
