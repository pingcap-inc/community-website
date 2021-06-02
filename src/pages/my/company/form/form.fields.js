import { utils } from '@tidb-community/common';

const { buildSchema } = utils.form;
const maxLength = 128;

export const fields = {
  companyName: {
    name: 'company_name',
    placeholder: '请输入',
    maxLength,
  },
  position: {
    name: 'job_title',
    placeholder: '请选择',
  },
};

export const schema = buildSchema(fields);
