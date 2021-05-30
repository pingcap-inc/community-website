import React from 'react';
import useSWR from 'swr';
import { Button, Skeleton } from 'antd';

import * as Styled from './content.styled';
import Box from './box';

const Content = () => {
  const { data, error } = useSWR('account.settings');
  const isLoading = !error && !data;

  if (isLoading) return <Skeleton />;

  return (
    <>
      <Box title="手机号码" text={data.phone ?? '未设置'} />
      <Box title="邮箱" text={data.email ?? '未设置'} />
      <Box title="密码" text={data.has_password ? '已设置，可通过账户密码登录' : '未设置'} />

      <Box>
        <h2>绑定第三方账号</h2>
        <Styled.Desc>绑定后可通过第三方应用快速登录，并获得 xxx 积分奖励</Styled.Desc>
        <Styled.SocialAccounts>
          <Button type="text" icon={<Styled.GithubIcon />}>
            绑定 GitHub
          </Button>
        </Styled.SocialAccounts>
      </Box>
    </>
  );
};

export default Content;
