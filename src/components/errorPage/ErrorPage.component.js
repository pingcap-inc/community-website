// Custom error page could be referred to
// https://nextjs.org/docs/advanced-features/custom-error-page
// https://github.com/vercel/next.js/blob/canary/packages/next/pages/_error.tsx

import * as R from 'ramda';
import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useRouter } from 'next/router';

import * as Styled from './errorPage.styled';
import Svg403 from './403.svg';
import Svg404 from './404.svg';
import Svg500 from './500.svg';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';

const icons = {
  403: Svg403,
  404: Svg404,
  500: Svg500,
};

const errorMsgs = {
  403: '抱歉，您没有权限访问该页面',
  404: '您访问的页面不存在',
  500: '服务器异常，请稍后重试',
};

const ErrorPage = ({ statusCode, errorMsg }) => {
  const router = useRouter();
  const Icon = R.propOr(icons[500], statusCode)(icons);

  errorMsg = errorMsg || R.propOr('未知错误，请稍后重试', statusCode)(errorMsgs);

  const headProps = {
    description: '',
    keyword: '',
    title: `${statusCode}: ${errorMsg}`,
  };

  const buttonProps = {
    type: 'primary',
    icon: <ArrowLeftOutlined />,
    onClick: (e) => {
      router.push('/community', '/');
    },
  };

  return (
    <>
      <CommunityHead {...headProps} />

      <CoreLayout MainWrapper={Styled.Container}>
        <Styled.IconWrapper>
          <Icon />
        </Styled.IconWrapper>
        <Styled.Message>{errorMsg}</Styled.Message>
        <Button {...buttonProps}>返回首页</Button>
      </CoreLayout>
    </>
  );
};

export default ErrorPage;
