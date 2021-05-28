import React from 'react';
import { Button } from 'antd';

import * as Styled from './settings.styled';
import Box from './box';
import Layout from '~/pages/users/layout';
import { CommunityHead } from '~/components/head';

const pageTitle = '账号设置';

const Settings = () => (
  <>
    <CommunityHead title={pageTitle} />

    <Layout title="账号设置">
      <Box title="手机号码" text="130****1234" />
      <Box title="邮箱" text="li**@gmail.com" />
      <Box title="密码" text="未设置" />

      <Box>
        <h2>绑定第三方账号</h2>
        <Styled.Desc>绑定后可通过第三方应用快速登录，并获得 xxx 积分奖励</Styled.Desc>
        <Styled.SocialAccounts>
          <Button type="text" icon={<Styled.GithubIcon />}>
            绑定 GitHub
          </Button>
          <Button type="text" icon={<Styled.WeChatIcon />}>
            绑定微信
          </Button>
        </Styled.SocialAccounts>
      </Box>
    </Layout>
  </>
);

export default Settings;
