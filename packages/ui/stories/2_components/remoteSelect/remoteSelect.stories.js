import React from 'react';
import { RemoteSelect } from '@tidb-community/ui';
import { api } from '@tidb-community/datasource';
import { getTitle } from '../utils';

export default {
  title: getTitle('RemoteSelect'),
  component: RemoteSelect,
};

const fetchCompanies = (word) => {
  return api.org.searchCompany({ word })
    .then(result => result.data.map(company => ({
      label: company.name,
      value: company.name,
    })));
};

const Template = ({ word, ...args }) => (
  <div>
    <RemoteSelect
      style={{width: '350px'}}
      fetchOptions={fetchCompanies} {...args}
    />
  </div>
);

export const WithNav = Template.bind({});

WithNav.args = {};
