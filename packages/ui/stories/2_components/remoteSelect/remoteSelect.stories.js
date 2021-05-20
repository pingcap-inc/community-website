import React from 'react';
import { RemoteSelect } from '@tidb-community/ui';

import { getTitle } from '../utils';

export default {
  title: getTitle('RemoteSelect'),
  component: RemoteSelect,
};

const fetchCompanies =
  ({ companyList, delay }) =>
  (word) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          companyList.filter(({ name }) => name.indexOf(word) !== -1).map(({ name }) => ({ label: name, value: name }))
        );
      }, delay);
    });
  };

const Template = ({ word, companyList, delay, ...args }) => (
  <div>
    <RemoteSelect style={{ width: '350px' }} fetchOptions={fetchCompanies({ companyList, delay })} {...args} />
  </div>
);

export const SearchCompany = Template.bind({});

SearchCompany.args = {
  companyList: [
    {
      name: '平凯星辰（北京）科技有限公司',
      credit_code: '91110108339695681X',
      base: '北京',
    },
    {
      name: '北京平凯星辰科技发展有限公司',
      credit_code: '911101083363962058',
      base: '北京',
    },
    {
      name: '河北兴晟农业科技有限公司',
      credit_code: '91130684MA0A8BQM53',
      base: '河北',
    },
  ],
  delay: 1000,
};
