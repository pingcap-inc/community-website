import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

const { buildSchema } = utils.form;
const maxLength = 128;

export const getFields = (lang) => ({
  teamName: {
    name: 'teamName',
    placeholder: lang.placeholder,
    validator: Yup.string().required(lang.teamNameNotEmpty),
    maxLength,
  },
});

export const getSchema = (fields) => buildSchema(fields);
