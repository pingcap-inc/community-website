import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

const { buildSchema, buildInitialValues } = utils.form;

export const getCommonFields = ({ lang }) => ({
  agreement: {
    name: 'agreement',
    validator: Yup.boolean().required(lang.required).oneOf([true], lang.agreement.privacy.error),
  },
});

export const getSchema = (fields) => buildSchema(fields);

export const getInitialValues = (fields) => buildInitialValues(fields);
