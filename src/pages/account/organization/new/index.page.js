import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import styled from 'styled-components';

import Audit from './audit';
import Banner from './banner';
import Form from './form';
import { AUDIT_STATUS } from './audit/audit.constants';
import { CoreLayout, SplitLayout } from 'layouts';
import { MeContext } from 'context';
import { featureToggle } from 'utils';
import { colors } from '@tidb-community/ui';

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

const Blank = styled.div`
  height: 400px;
  background-color: ${colors.M2};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreateOrganization = () => {
  const router = useRouter();
  const { meData, mutateMe, isMeValidating } = useContext(MeContext);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setShowForm(!(meData?.org || meData?.org_enroll));
  }, [meData]);

  const status = meData?.org ? AUDIT_STATUS.PASS : meData?.org_enroll?.audit_status;
  const rejectReason = meData?.org_enroll?.audit_reason;

  const resetForm = () => setShowForm(true);
  const pushOrgHome = () => router.push(`/orgs/${meData?.org?.slug}/members`);

  if (isMeValidating) {
    return (
      <CoreLayout domain="tug.tidb.io">
        <Blank>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        </Blank>
      </CoreLayout>
    );
  }

  return (
    <CoreLayout domain="tug.tidb.io">
      {(() => {
        if (showForm) {
          return (
            <SplitLayout dividerColor={'rgba(108, 116, 150, 0.4)'} marginTop="30px" marginBottom="41px">
              <Banner />
              <Form onSubmit={mutateMe} />
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
