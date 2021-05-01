import React from 'react';

import { CoreLayout, SplitLayout } from 'layouts';
import { featureToggle } from 'utils';
import Banner from './banner';
import Form from './form';

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

const CreateOrganization = () => {
  return (
    <CoreLayout domain="tug.tidb.io">
      <SplitLayout dividerColor={'rgba(108, 116, 150, 0.4)'} marginTop="30px" marginBottom="41px">
        <Banner />
        <Form />
      </SplitLayout>
    </CoreLayout>
  );
};

export default CreateOrganization;
