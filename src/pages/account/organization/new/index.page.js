import React from 'react';

import { featureToggle } from 'utils';
import { CoreLayout } from 'layouts';
import CreateOrganization from './content.component';

export const getServerSideProps = async ({ req }) => {
  // https://vercel.com/docs/environment-variables#system-environment-variables
  const host = process.env.VERCEL_URL || req.headers.host;

  const isEabled = featureToggle.isFeatureEnabled({
    host,
    name: featureToggle.FEATURES.CREATE_ORGANIZATION,
  });

  if (!isEabled) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};

const Page = () => {
  return (
    <CoreLayout domain="tug.tidb.io">
      <CreateOrganization />
    </CoreLayout>
  );
};

export default Page;
