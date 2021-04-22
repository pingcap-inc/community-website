import React from 'react';
import { CoreLayout, SplitLayout } from 'layouts';
import Form from './form';
import Banner from './banner';

const NewOrganization = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <>
      <CoreLayout domain="tug.tidb.io">
        <SplitLayout dividerColor={'rgba(108, 116, 150, 0.4)'} marginTop="30px" marginBottom="41px">
          <Banner />
          <Form onSubmit={onSubmit} />
        </SplitLayout>
      </CoreLayout>
    </>
  );
};

export default NewOrganization;
