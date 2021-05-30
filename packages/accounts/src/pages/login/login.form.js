import { utils } from '@tidb-community/common';

import { LOGIN_TYPE, LOGIN_TYPE_VALUE_NAME } from './login.constants';
import { phone, verifyCode, password, identifier } from '~/form/fields';
import { phoneLoginSendCode } from '~/api';

const { buildInitialValues, buildSchema, conditionalField } = utils.form;

export const form = {
  phone: conditionalField(phone, { value: LOGIN_TYPE_VALUE_NAME, is: LOGIN_TYPE.VERIFY_CODE }),
  verifyCode: {
    ...conditionalField(verifyCode, { value: LOGIN_TYPE_VALUE_NAME, is: LOGIN_TYPE.VERIFY_CODE }),
    sendVerifyCode: (phone) => phoneLoginSendCode({ phone }),
  },
  identifier: conditionalField(identifier, { value: LOGIN_TYPE_VALUE_NAME, is: LOGIN_TYPE.PASSWORD }),
  password: conditionalField(password, { value: LOGIN_TYPE_VALUE_NAME, is: LOGIN_TYPE.PASSWORD }),
  loginType: {
    name: LOGIN_TYPE_VALUE_NAME,
    initialValue: LOGIN_TYPE.VERIFY_CODE,
  },
};

export const formSchema = buildSchema(form);

export const initialValues = buildInitialValues(form);
