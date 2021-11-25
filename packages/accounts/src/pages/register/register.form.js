import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

import { company, email, phone, verifyCode } from '~/form/fields';
import { sendCode } from '~/api';

const { buildSchema, buildInitialValues } = utils.form;

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
    terms: {
      title: '《使用条款》',
      url: 'https://pingcap.com/zh/terms-of-use',
    },
    validator: Yup.bool().oneOf([true], '需阅读并同意相关协议').required('需阅读并同意相关协议'),
    initialValue: false,
  },
};

export const formSchema = buildSchema(form);

export const initialValues = buildInitialValues(form);
