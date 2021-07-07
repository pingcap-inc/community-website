import * as Yup from 'yup';
import { utils } from '@tidb-community/common';
import { Select } from 'formik-antd';

import { getFormData } from '@tidb-community/datasource';
import { fetchOrganizationOptions } from '~/pages/account/organization/new/form/form.data';

const { buildSchema } = utils.form;
const formData = getFormData();
const { organizationTypes, organizationSizes, provinces } = formData.org.enums;

const introMaxLength = 50;

export const getFields = ({ isAdmin, lang, t }) => {
  const disabled = !isAdmin;

  return {
    teamName: {
      name: 'name',
      disabled,
      placeholder: lang.pleaseEnter,
      validator: Yup.string()
        .min(4, ({ min }) => t('settings.validations.teamNameMinLength', { min }))
        .max(20, ({ max }) => t('settings.validations.teamNameMaxLength', { max }))
        .required(lang.teamNameNotEmpty),
    },

    companyName: {
      name: 'company_name',
      disabled,
      placeholder: lang.pleaseEnter,
      validator: Yup.mixed().required(lang.companyNameNotEmpty),
      fetchOptions: fetchOrganizationOptions,
      labelInValue: false,
      Select,
    },

    introduction: {
      name: 'introduction',
      disabled,
      placeholder: lang.placeholder,
      maxLength: introMaxLength,
      validator: Yup.string().max(introMaxLength, ({ max }) =>
        t('settings.validations.introductionMaxLength', { max })
      ),
    },

    industryType: {
      name: 'industry_type_code',
      disabled,
      placeholder: lang.pleaseSelect,
      options: organizationTypes,
      validator: Yup.mixed().required(lang.industryTypeNotEmpty),
    },

    orgSize: {
      name: 'member_range_code',
      disabled,
      placeholder: lang.pleaseSelect,
      options: organizationSizes,
      validator: Yup.mixed().required(lang.orgSizeNotEmpty),
    },

    orgLocation: {
      name: 'company_base_code',
      disabled,
      placeholder: lang.pleaseSelect,
      options: provinces,
      validator: Yup.array().length(2, lang.locationNotEmpty).required(lang.locationNotEmpty),
    },
  };
};

export const getSchema = (fields) => buildSchema(fields);
