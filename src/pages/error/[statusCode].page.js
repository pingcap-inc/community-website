import React from 'react';
import { useRouter } from 'next/router';

import ErrorPage from 'components/errorPage';

const Page = () => {
  const router = useRouter();
  const { statusCode } = router.query;

  return <ErrorPage statusCode={statusCode} />;
};

export default Page;
