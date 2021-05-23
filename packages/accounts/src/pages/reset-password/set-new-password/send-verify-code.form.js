import { utils } from '@tidb-community/common';

import { password, confirmPassword } from '~/form/fields';

const { buildInitialValues, buildScheme } = utils.form;

export const form = {
  password,
  confirmPassword,
};

export const formScheme = buildScheme(form);

export const initialValues = buildInitialValues(form);
