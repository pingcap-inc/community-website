import { utils } from '@tidb-community/common';

const { buildInitialValues, buildSchema } = utils.form;

export const form = {
  phone: {
    name: 'phone',
    placeholder: '请输入新手机号码',
  },
  code: {
    name: 'code',
    placeholder: '6 位验证码',
    sendVerifyCodeBtnText: '获取验证码',
  },
};

export const initialValues = buildInitialValues(form);

export const schema = buildSchema(form);
