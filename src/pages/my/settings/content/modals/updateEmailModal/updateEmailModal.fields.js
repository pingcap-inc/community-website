import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

import * as commonFields from '../modal.fields';

const { buildInitialValues, buildSchema } = utils.form;

export const fields = {
  email: {
    name: 'email',
    placeholder: '请输入邮箱',
    validator: Yup.string().email('请输入有效的邮箱').required('邮箱不可为空'),
    initialValues: '',
  },
  code: commonFields.code(),
};

export const initialValues = buildInitialValues(fields);

export const schema = buildSchema(fields);
