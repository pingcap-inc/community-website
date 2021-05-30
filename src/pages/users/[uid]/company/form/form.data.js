import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

const { buildSchema } = utils.form;

export const form = {
  companyName: {
    name: 'company_name',
    placeholder: '请输入',
    validator: Yup.string().required('公司名不可为空'),
  },
  position: {
    name: 'job_title',
    placeholder: '请选择',
  },
};

export const schema = buildSchema(form);
