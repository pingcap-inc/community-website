import React, { useState } from 'react';
import useSWR from 'swr';
import { Button, Modal, Skeleton, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { api } from '@tidb-community/datasource';

import * as Styled from './content.styled';
import Box from './box';
import { MODALS, SetPasswordModal, UpdateEmailModal, UpdatePasswordModal, UpdatePhoneModal } from './modals';

const Content = () => {
  const [visibleModal, setVisibleModal] = useState();
  const { data: settingsResp, error, mutate, revalidate } = useSWR('account.settings');

  const isLoading = !error && !settingsResp;
  if (isLoading) return <Skeleton />;

  const { data } = settingsResp;
  const {
    associated_accounts: { github },
    has_password: hasPassword,
  } = data;

  const openModal = (type) => (e) => setVisibleModal(type);

  const onModalClose = () => {
    setVisibleModal();
  };

  const genModalProps = (modal) => ({
    revalidate,
    onClose: onModalClose,
    visible: visibleModal === modal,
  });

  const bind = (provider) => (e) => {
    api.social.login({
      provider,
      redirect_to: window.location.href,
    });

    const { location } = window;
    location.href = `${
      process.env.NEXT_PUBLIC_ACCOUNTS_BASE_URL
    }/social/login/${provider}?redirect_to=${encodeURIComponent(location.href)}`;
  };

  const unbind = (provider) => (e) => {
    Modal.confirm({
      title: '确定解绑 GitHub 账号吗？',
      icon: <ExclamationCircleOutlined />,
      content: '解除绑定后，您无法再通过 GitHub 账号快速登录',
      okText: '确认',
      cancelText: '取消',

      onOk: () => {
        api.social.disconnect(provider).then(() => {
          message.success('解绑成功');
          mutate(
            {
              ...settingsResp,
              data: {
                ...data,
                associated_accounts: {
                  [provider]: null,
                },
              },
            },
            false
          );
        });
      },
    });
  };

  return (
    <>
      <Box title="手机号码" text={data.phone ?? '未设置'} onSettingsClick={openModal(MODALS.UPDATE_PHONE)} />
      <Box title="邮箱" text={data.email ?? '未设置'} onSettingsClick={openModal(MODALS.UPDATE_EMAIL)} />
      <Box
        title="密码"
        text={hasPassword ? '已设置，可通过账户密码登录' : '未设置'}
        onSettingsClick={openModal(hasPassword ? MODALS.UPDATE_PASSWORD : MODALS.SET_PASSWORD)}
      />

      <Box>
        <h2>绑定第三方账号</h2>
        <Styled.Desc>绑定后可通过第三方应用快速登录，并获得 20 积分奖励</Styled.Desc>
        <Styled.SocialAccounts>
          {github ? (
            <Styled.Account>
              <Styled.GithubIcon />
              {github.login}（<span onClick={unbind('github')}>解绑</span>）
            </Styled.Account>
          ) : (
            <Button type="text" icon={<Styled.GithubIcon />} onClick={bind('github')}>
              绑定 GitHub
            </Button>
          )}
        </Styled.SocialAccounts>
      </Box>

      <UpdateEmailModal {...genModalProps(MODALS.UPDATE_EMAIL)} />
      <UpdatePhoneModal {...genModalProps(MODALS.UPDATE_PHONE)} />
      <SetPasswordModal {...genModalProps(MODALS.SET_PASSWORD)} />
      <UpdatePasswordModal {...genModalProps(MODALS.UPDATE_PASSWORD)} />
    </>
  );
};

export default Content;
