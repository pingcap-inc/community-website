// Custom error page could be referred to
// https://nextjs.org/docs/advanced-features/custom-error-page
// https://github.com/vercel/next.js/blob/canary/packages/next/pages/_error.tsx

import React, {useEffect, useState} from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useRouter } from 'next/router';

import * as Styled from './errorPage.styled';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import ErrorStatus from "~/components/errorPage/ErrorStatus";

const ErrorPage = ({ statusCode, errorMsg, error = undefined }) => {
  const router = useRouter();
  const [returnToHomepageLoading, setReturnToHomepageLoading] = useState(false)
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  const headProps = {
    description: '',
    keyword: '',
    title: `${statusCode}: ${errorMsg}`,
  };

  const buttonProps = {
    type: 'primary',
    icon: <ArrowLeftOutlined />,
    loading: returnToHomepageLoading,
    onClick: async () => {
      setReturnToHomepageLoading(true)
      await router.push('/community', '/')
      setReturnToHomepageLoading(false)
    },
  };

  return (
    <>
      <CommunityHead {...headProps} />

      <CoreLayout MainWrapper={Styled.Container}>
        <ErrorStatus statusCode={statusCode} errorMsg={errorMsg} />
        <Button {...buttonProps}>返回首页</Button>
      </CoreLayout>
    </>
  );
};

export default ErrorPage;
