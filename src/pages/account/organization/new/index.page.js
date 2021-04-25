import React from 'react';

import Banner from './banner';
import Form from './form';
import { CoreLayout, SplitLayout } from 'layouts';
import { featureToggle } from 'utils';

export const getServerSideProps = async () => {
  const isEabled = featureToggle.isFeatureEnabled({
    name: 'create-organization',
    host: 'localhost:3001',
  });

  console.log('isEabled!!', isEabled);

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

  return (
    <CoreLayout domain="tug.tidb.io">
      <SplitLayout dividerColor={'rgba(108, 116, 150, 0.4)'} marginTop="30px" marginBottom="41px">
        <Banner />
        <Form submit={onSubmit} />
      </SplitLayout>
    </CoreLayout>
  );
};

export default CreateOrganization;
