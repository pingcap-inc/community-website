import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import Audit from './audit';
import Banner from './banner';
import Form from './form';
import { AUDIT_STATUS } from './audit/audit.constants';
import { CoreLayout, SplitLayout } from 'layouts';
import { MeContext } from 'context';
import { featureToggle } from 'utils';

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
  const router = useRouter();
  const { meData, meMutate } = useContext(MeContext);
  const [showForm, setShowForm] = useState(!(meData.org || meData.org_enroll));

  const status = meData.org ? AUDIT_STATUS.PASS : meData.org_enroll?.audit_status;
  const rejectReason = meData.org_enroll?.audit_reason;

  const resetForm = () => setShowForm(true);
  const pushOrgHome = () => router.push(`/orgs/${meData.org?.slug}/home`);

  return (
    <CoreLayout domain="tug.tidb.io">
      {(() => {
        if (showForm) {
          return (
            <SplitLayout dividerColor={'rgba(108, 116, 150, 0.4)'} marginTop="30px" marginBottom="41px">
              <Banner />
              <Form onSubmit={meMutate} />
            </SplitLayout>
          );
        } else {
          return (
            <Audit
              status={status}
              rejectReason={rejectReason}
              onClickResetForm={resetForm}
              onClickOrgHome={pushOrgHome}
            />
          );
        }
      })()}
    </CoreLayout>
  );
};

export default CreateOrganization;
