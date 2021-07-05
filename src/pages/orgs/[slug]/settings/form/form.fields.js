import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

const { buildSchema } = utils.form;
const maxLength = 128;

export const getFields = ({ lang, t }) => ({
  teamName: {
    name: 'name',
    maxLength,
    placeholder: lang.placeholder,
    validator: Yup.string()
      .min(4, ({ min }) => t('settings.validations.teamNameMinLength', { min }))
      .max(20, ({ max }) => t('settings.validations.teamNameMaxLength', { max }))
      .required(lang.teamNameNotEmpty),
  },
  companyName: {
    name: 'company_name',
    maxLength,
    placeholder: lang.placeholder,
    validator: Yup.string().required(lang.companyNameNotEmpty),
  },
});

export const getSchema = (fields) => buildSchema(fields);
