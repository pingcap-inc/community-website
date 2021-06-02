import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

import * as commonFields from '../modal.fields';

const { buildInitialValues, buildSchema } = utils.form;

export const fields = {
  oldPassword: {
    ...commonFields.newPassword(),
    name: 'old_password',
    placehoder: '请输入当前密码',
    validator: Yup.string().required('密码不可为空'),
  },
  newPassword: commonFields.newPassword(),
  confirmPassword: commonFields.confirmPassword(),
};

export const initialValues = buildInitialValues(fields);

export const schema = buildSchema(fields);
