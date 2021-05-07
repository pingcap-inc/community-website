import React from 'react';

import { api } from '@tidb-community/datasource';
import Banner from './banner';
import Form from './form';
import Audit from './audit';
import { CoreLayout, SplitLayout } from 'layouts';
import { featureToggle } from 'utils';
import { useMe } from 'hooks/me';
import { AUDIT_STATUS } from './audit/audit.constants';

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

  const meResp = await api.me();

  return {
    props: {
      meResp,
    },
  };
};

const CreateOrganization = ({ meResp }) => {
  const { meData, reload } = useMe(meResp);

  const showForm = !(meData.org || meData.org_enroll);
  const status = meData.org ? AUDIT_STATUS.PASS : meData.org_enroll?.audit_status;
  const rejectReason = meData.org_enroll?.audit_reason;

  return (
    <CoreLayout domain="tug.tidb.io">
      {(() => {
        if (showForm) {
          return (
            <SplitLayout dividerColor={'rgba(108, 116, 150, 0.4)'} marginTop="30px" marginBottom="41px">
              <Banner />
              <Form onSubmit={reload} />
            </SplitLayout>
          );
        } else {
          return <Audit status={status} rejectReason={rejectReason} />;
        }
      })()}
    </CoreLayout>
  );
};

export default CreateOrganization;
