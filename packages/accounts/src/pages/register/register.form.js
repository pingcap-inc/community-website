import * as Yup from 'yup';
import { buildInitialValues, buildSchema } from '@tidb-community/common/utils/form';

import { company, email, phone, verifyCode } from '~/form/fields';
import { sendCode } from '~/api';

export const form = {
  company,
  email,
  phone,
  verifyCode: {
    ...verifyCode,
    sendVerifyCode: (phone) => sendCode('signup', { phone }),
  },
  agreements: {
    name: 'agreements',
    value: true,
    prefixText: '我已阅读并同意',
    privacy: {
      title: '《隐私协议》',
      url: 'https://pingcap.com/zh/privacy-policy/',
    },
    validator: Yup.bool().oneOf([true], '需阅读并同意相关协议').required('需阅读并同意相关协议'),
    initialValue: false,
  },
};

export const formSchema = buildSchema(form);

export const initialValues = buildInitialValues(form);
