import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

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
  code: {
    name: 'code',
    placeholder: '6位验证码',
    validator: Yup.string()
      .length(6, ({ length }) => `请输入${length}位验证码`)
      .required('验证码不可为空'),
    initialValue: '',
    sendVerifyCodeBtnText: '发送验证码',
    limitSeconds: 60000,
    countDownFormatter: (ms) => `${Math.round(ms / 1000)}s`,
  },
};

export const initialValues = buildInitialValues(fields);

export const schema = buildSchema(fields);
