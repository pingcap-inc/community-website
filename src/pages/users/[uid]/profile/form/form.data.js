import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

const { buildSchema } = utils.form;

export const form = {
  username: {
    name: 'username',
    placeholder: '请输入',
    validator: Yup.string().required('用户名不可为空'),
  },
  bio: {
    name: 'bio',
    placeholder: '介绍一下你自己吧',
  },
  name: {
    name: 'name',
    placeholder: '请填写真实姓名',
  },
  gender: {
    name: 'gender',
    placeholder: '请选择',
  },
  dateOfBirth: {
    name: 'date_of_birth',
    placeholder: '年/月/日',
  },
  address: {
    name: 'address',
    placeholder: '请填写详细地址',
  },
};

export const schema = buildSchema(form);
