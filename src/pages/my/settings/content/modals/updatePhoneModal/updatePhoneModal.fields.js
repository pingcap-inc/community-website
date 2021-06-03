import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

import * as commonFields from '../modal.fields';

const { buildInitialValues, buildSchema } = utils.form;

export const fields = {
  phone: {
    name: 'phone',
    placeholder: '请输入新手机号码',
    validator: Yup.string()
      .length(11, ({ length }) => `手机号长度必须为${length}位`)
      .required('手机号不可为空'),
    initialValue: '',
  },
  code: commonFields.code(),
};

export const initialValues = buildInitialValues(fields);

export const schema = buildSchema(fields);
