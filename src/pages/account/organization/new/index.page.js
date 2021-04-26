import React from 'react';
import { api } from '@tidb-community/datasource';

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
  const onSubmit = (formData) => {
    console.log(formData);
    return new Promise((resolve, reject) => setTimeout(() => reject('todo implement'), 1000));
  };

  const sendEmail = (email) => {
    return api.org.enroll.sendCode({ email });
  };

  const uploadIncumbencyCert = ({ file, filename, onProgress }) => {
    return api.org.enroll
      .uploadIncumbencyCert({ file, filename, onUploadProgress: onProgress })
      .then((res) => res.data.cert_id);
  };

  return (
    <CoreLayout domain="tug.tidb.io">
      <SplitLayout dividerColor={'rgba(108, 116, 150, 0.4)'} marginTop="30px" marginBottom="41px">
        <Banner />
        <Form submit={onSubmit} sendEmail={sendEmail} uploadIncumbencyCert={uploadIncumbencyCert} />
      </SplitLayout>
    </CoreLayout>
  );
};

export default CreateOrganization;
