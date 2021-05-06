import React, { useState } from 'react';

import Banner from './banner';
import Form from './form';
import Audit from './audit';
import { CoreLayout, SplitLayout } from 'layouts';
import { featureToggle } from 'utils';
import { useRouter } from 'next/router';

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
  // temp codes
  const { query } = useRouter();
  const [isSubmitted, setSubmitted] = useState(query.submitted === 'true');
  const status = query.status || 'pending';
  const rejectReason = query.reason || '未知原因';

  return (
    <CoreLayout domain="tug.tidb.io">
      {!isSubmitted ? (
        <SplitLayout dividerColor={'rgba(108, 116, 150, 0.4)'} marginTop="30px" marginBottom="41px">
          <Banner />
          <Form onSubmit={() => setSubmitted(true)} />
        </SplitLayout>
      ) : (
        <Audit status={status} rejectReason={rejectReason} />
      )}
    </CoreLayout>
  );
};

export default CreateOrganization;
