import React from 'react';
import { Button } from 'antd';

import * as Styled from './content.styled';
import Box from './box';

const Content = () => {
  return (
    <>
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
        </Styled.SocialAccounts>
      </Box>
    </>
  );
};

export default Content;
