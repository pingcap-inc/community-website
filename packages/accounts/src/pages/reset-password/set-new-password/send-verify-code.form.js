import { utils } from '@tidb-community/common';

import { newPassword, confirmPassword } from '~/form/fields';

const { buildInitialValues, buildSchema } = utils.form;

export const form = {
  newPassword,
  confirmPassword,
};

export const formSchema = buildSchema(form);

export const initialValues = buildInitialValues(form);
