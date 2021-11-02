import { utils } from '@tidb-community/common';
import { getFormData } from '@tidb-community/datasource';

const formData = getFormData();
const { personalPositions } = formData.org.enums;
const { buildSchema } = utils.form;

export const fields = {
  companyName: {
    name: 'company_name',
    placeholder: '请输入',
    maxLength: 128,
    labelInValue: false,
  },
  position: {
    name: 'job_title',
    placeholder: '请选择',
    options: personalPositions,
  },
};

export const schema = buildSchema(fields);
