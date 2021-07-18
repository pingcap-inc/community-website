import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

const { buildSchema, buildInitialValues } = utils.form;

export const getFields = ({ lang, t }) => {
  const { type: typeLang } = lang;

  return {
    type: {
      name: 'emergency_type',
      placeholder: lang.pleaseSelect,
      options: [
        {
          value: 'online',
          label: typeLang.online,
        },
        {
          value: 'offline',
          label: typeLang.offline,
        },
      ],
      validator: Yup.mixed().required(lang.required),
    },
  };
};

export const getSchema = (fields) => buildSchema(fields);

export const getInitialValues = (fields) => buildInitialValues(fields);
