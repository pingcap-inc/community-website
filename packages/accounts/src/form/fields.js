import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

import { phoneLoginCheck } from '~/api';

utils.form.createYupRemoteValidator(Yup.string, 'checkPhone', (phone) => phoneLoginCheck({ phone }));

export const phone = {
  name: 'phone',
  placeholder: '请输入手机号',
  validator: Yup.string()
    .length(11, ({ length }) => `手机号长度必须为${length}位`)
    .required('手机号不可为空'),
  initialValue: '',
};

export const identifier = {
  name: 'identifier',
  placeholder: '请输入邮箱或手机号',
  validator: Yup.string().required('邮箱或手机号不能为空'),
  initialValue: '',
};

export const verifyCode = {
  name: 'code',
  placeholder: '6位验证码',
  validator: Yup.string()
    .length(6, ({ length }) => `请输入${length}位验证码`)
    .required('验证码不可为空'),
  initialValue: '',
  sendVerifyCodeBtnText: '发送验证码',
  limitSeconds: 60000,
  countDownFormatter: (ms) => `${Math.round(ms / 1000)}s`,
};

export const password = {
  name: 'password',
  placeholder: '请输入密码',
  validator: Yup.string().required('密码不可为空'),
  initialValue: '',
};

export const newPassword = {
  ...password,
  name: 'new_password',
  validator: password.validator.min(8, '密码最少为8个字符'),
};

export const confirmPassword = {
  name: 'confirm_password',
  placeholder: '请再次输入密码',
  validator: Yup.string().oneOf([Yup.ref('new_password')], '两次密码输入不相同'),
  initialValue: '',
};

export const email = {
  name: 'email',
  placeholder: '请输入邮箱',
  validator: Yup.string().email('请输入有效的邮箱').required('邮箱不可为空'),
  initialValue: '',
};

export const company = {
  name: 'company',
  placeholder: '请输入所在的公司',
  validator: Yup.string()
    .min(1, ({ min }) => `最少输入${min}个字符`)
    .max(100, ({ max }) => `最多输入${max}个字符`)
    .required('公司不能为空'),
  initialValue: '',
};
