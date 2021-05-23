import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

import { company, email, mobile, verifyCode } from '~/form/fields';

const { buildInitialValues, buildScheme } = utils.form;

export const form = {
  company,
  email,
  mobile,
  verifyCode,
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

export const formScheme = buildScheme(form);

export const initialValues = buildInitialValues(form);
