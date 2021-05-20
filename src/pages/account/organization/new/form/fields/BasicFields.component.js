import React from 'react';
import { Form as AntForm, Input, Select, Cascader } from 'formik-antd';
import { RemoteSelect } from '@tidb-community/ui';

import data from '../form.data';

const {
  nickname,
  organization,
  organizationType,
  organizationSize,
  organizationLocation,
  personalPosition,
  personalContact,
} = data.form;

const BasicFields = () => {
  return (
    <>
      <AntForm.Item name={nickname.name}>
        <Input {...nickname} />
      </AntForm.Item>
      <AntForm.Item name={organization.name}>
        <RemoteSelect {...organization} Select={Select} />
      </AntForm.Item>
      <AntForm.Item name={organizationType.name}>
        <Select {...organizationType} />
      </AntForm.Item>
      <AntForm.Item name={organizationSize.name}>
        <Select {...organizationSize} />
      </AntForm.Item>
      <AntForm.Item name={organizationLocation.name}>
        <Cascader {...organizationLocation} />
      </AntForm.Item>
      <AntForm.Item name={personalPosition.name}>
        <Select {...personalPosition} />
      </AntForm.Item>
      <AntForm.Item name={personalContact.name}>
        <Input {...personalContact} />
      </AntForm.Item>
    </>
  );
};

export default BasicFields;
