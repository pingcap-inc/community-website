import { buildInitialValues, buildScheme } from 'commons/utils/form';
import { LOGIN_TYPE, LOGIN_TYPE_VALUE_NAME } from './login.constants';

import { mobile, verifyCode, password } from '../../form/fields';
import { conditionalField } from '../../form/utils';

export const form = {
  mobile,
  verifyCode: conditionalField(verifyCode, { value: LOGIN_TYPE_VALUE_NAME, is: LOGIN_TYPE.VERIFY_CODE }),
  password: conditionalField(password, { value: LOGIN_TYPE_VALUE_NAME, is: LOGIN_TYPE.PASSWORD }),
  loginType: {
    name: LOGIN_TYPE_VALUE_NAME,
    initialValue: LOGIN_TYPE.VERIFY_CODE,
  },
};

export const formScheme = buildScheme(form);

export const initialValues = buildInitialValues(form);
