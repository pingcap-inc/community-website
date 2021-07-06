import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

import { fetchOrganizationOptions } from '~/pages/account/organization/new/form/form.data';

const { buildSchema } = utils.form;

export const getFields = ({ lang, t }) => ({
  teamName: {
    name: 'name',
    placeholder: lang.pleaseEnter,
    validator: Yup.string()
      .min(4, ({ min }) => t('settings.validations.teamNameMinLength', { min }))
      .max(20, ({ max }) => t('settings.validations.teamNameMaxLength', { max }))
      .required(lang.teamNameNotEmpty),
  },

  companyName: {
    name: 'company_name',
    placeholder: lang.pleaseEnter,
    validator: Yup.mixed().required(lang.companyNameNotEmpty),
    fetchOptions: fetchOrganizationOptions,
  },

  introduction: {
    name: 'introduction',
    maxLength: 50,
    placeholder: lang.placeholder,
  },

  industryType: {
    name: 'industry_type_code',
    placeholder: lang.pleaseSelect,
  },

  orgSize: {
    name: 'member_range_code',
    placeholder: lang.pleaseSelect,
  },
});

export const getSchema = (fields) => buildSchema(fields);
