import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

const { buildSchema } = utils.form;

export const getFields = ({ lang, t }) => ({
  type: {
    name: 'name',
    placeholder: lang.pleaseSelect,
    validator: Yup.required(lang.required),
  },
});

export const getSchema = (fields) => buildSchema(fields);
