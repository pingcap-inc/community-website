import React, { useContext, useState } from 'react';
import useSWR from 'swr';
import { Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { api } from '@tidb-community/datasource';
import { useRouter } from 'next/router';

import * as Styled from './members.styled';
import * as utils from './members.utils';
import AddModal from './addModal';
import Layout from '~/pages/orgs/layout';
import { AuthContext, MeContext } from '~/context';
import { CommunityHead, PageLoader } from '~/components';
import { columns } from './members.data';
import { errors } from '~/utils';

const Members = () => {
  const router = useRouter();
  const { isReady, query } = router;
  const { slug } = query;
  const { data: membersResp, mutate: mutateMembers } = useSWR(isReady && ['orgs.org.members', query]);
  const { login, isAnonymous } = useContext(AuthContext);
  const { meData } = useContext(MeContext);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const isAdmin = utils.isAdmin(meData);

  if (isAnonymous) {
    login();
    return null;
  }

  if (!meData) {
    return <PageLoader />;
  }

  const onRoleChange = async ({ id, role }) => {
    try {
      await api.orgs.org.updateMemberRole({ role, slug, userId: id });
      mutateMembers(
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
    } catch (err) {
      Modal.warn({
        title: '无法更新角色',
        content: errors.getFirstApiErrorMsg(err),
        centered: true,
      });
    }
  };

  const onAddMembers = () => {
    setIsAddModalVisible(true);
  };

  const onDelete = ({ id, isMyself }) => {
    const config = {
      title: '确定要删除该成员吗？',
      icon: <ExclamationCircleOutlined />,
      content: '删除后，该成员将失去认证身份',
      okText: '确定',
      cancelText: '取消',
      centered: true,

      async onOk() {
        try {
          await api.orgs.org.removeMember({ slug, userId: id });

          if (isMyself) {
            router.push('/community', '/');
          }

          mutateMembers(
            {
              ...membersResp,
              data: membersResp.data.filter((item) => item.id !== id),
            },
            false
          );
        } catch (err) {
          Modal.warn({
            title: '无法退出团队',
            content: errors.getFirstApiErrorMsg(err),
            centered: true,
          });
        }
      },
    };

    Modal.confirm({
      ...config,
      ...(isMyself && {
        title: '确定要退出该团队吗？',
        content: '退出团队后将不在享有团队权益',
      }),
    });
  };

  const dataSource = utils.getDataSource({ membersResp, meData, onDelete, onRoleChange, isAdmin });

  const tableProps = {
    columns,
    dataSource,
    loading: !membersResp,
  };

  const addModalProps = {
    mutateMembers,
    onCancel: () => setIsAddModalVisible(false),
    visible: isAddModalVisible,
  };

  return (
    <>
      <CommunityHead title="团队成员" />

      <Layout>
        <Styled.Header>
          <Styled.Title>
            团队成员
            <Styled.Badge count={dataSource.length} />
          </Styled.Title>

          {isAdmin && (
            <Button type="primary" size="small" onClick={onAddMembers}>
              添加成员
            </Button>
          )}
        </Styled.Header>

        <Styled.Table {...tableProps} pagination={false} />
      </Layout>

      <AddModal {...addModalProps} />
    </>
  );
};

export default Members;
