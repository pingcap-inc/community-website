import React from 'react';

import Banner from './banner';
import Form from './form';
import { CoreLayout, SplitLayout } from 'layouts';

export const getServerSideProps = async () => {
  return {
    notFound: true,
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
