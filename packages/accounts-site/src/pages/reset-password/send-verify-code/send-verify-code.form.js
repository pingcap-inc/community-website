import * as Yup from 'yup';
import { buildInitialValues, buildScheme } from 'commons/utils/form';

export const form = {
  mobileOrEmail: {
    name: 'mobile_or_email',
    placeholder: '请输入手机号或邮箱',
    validator: Yup.string().required('手机号或邮箱不可为空'),
    initialValue: '',
  },
};

export const formScheme = buildScheme(form);

export const initialValues = buildInitialValues(form);
