// Common field definitions shared among forms
import * as Yup from 'yup';

export const code = (name = 'code') => ({
  name,
  placeholder: '6位验证码',
  validator: Yup.string()
    .length(6, ({ length }) => `请输入${length}位验证码`)
    .required('验证码不可为空'),
  initialValue: '',
  sendVerifyCodeBtnText: '发送验证码',
  limitSeconds: 60000,
  countDownFormatter: (ms) => `${Math.round(ms / 1000)}s`,
});
