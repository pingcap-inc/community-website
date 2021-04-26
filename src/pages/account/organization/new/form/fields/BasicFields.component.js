import React from 'react';
import { Form as AntForm, Input, Select, Cascader } from 'antd';
import { RemoteSelect } from '@tidb-community/ui';
import { api } from '@tidb-community/datasource';

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

const fetchOrganizationOptions = (word) =>
  api.org.searchCompany({ word }).then((result) =>
    result.data.map((company) => ({
      label: company.name,
      value: company.name,
    }))
  );

const BasicFields = ({ buildFormItemProps }) => {
  return (
    <>
      <AntForm.Item {...buildFormItemProps(nickname.name)}>
        <Input placeholder={nickname.placeholder} />
      </AntForm.Item>
      <AntForm.Item {...buildFormItemProps(organization.name)}>
        <RemoteSelect placeholder={organization.placeholder} fetchOptions={fetchOrganizationOptions} />
      </AntForm.Item>
      <AntForm.Item {...buildFormItemProps(organizationType.name)}>
        <Select placeholder={organizationType.placeholder} options={organizationType.enums} />
      </AntForm.Item>
      <AntForm.Item {...buildFormItemProps(organizationSize.name)}>
        <Select placeholder={organizationSize.placeholder} options={organizationSize.enums} />
      </AntForm.Item>
      <AntForm.Item {...buildFormItemProps(organizationLocation.name)}>
        <Cascader placeholder={organizationLocation.placeholder} options={organizationLocation.provinces} />
      </AntForm.Item>
      <AntForm.Item {...buildFormItemProps(personalPosition.name)}>
        <Select placeholder={personalPosition.placeholder} options={personalPosition.enums} />
      </AntForm.Item>
      <AntForm.Item {...buildFormItemProps(personalContact.name)}>
        <Input placeholder={personalContact.placeholder} />
      </AntForm.Item>
    </>
  );
};

export default BasicFields;
