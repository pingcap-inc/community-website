import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

const { buildSchema, buildInitialValues } = utils.form;

export const getDropdownValidator = ({ lang }) => Yup.mixed().required(lang.required);

export const getTextareaValidator = ({ lang, t, limit, isRequired = true }) => {
  const validator = Yup.string().max(limit, ({ max }) => t('errors.limit', { max }));
  return isRequired ? validator.required(lang.required) : validator;
};

export const getCommonFields = ({ lang }) => ({
  agreement: {
    name: 'agreement',
    validator: Yup.boolean().required(lang.required).oneOf([true], lang.agreement.privacy.error),
  },
});

export const getSchema = (fields) => buildSchema(fields);

export const getInitialValues = (fields) => buildInitialValues(fields);
