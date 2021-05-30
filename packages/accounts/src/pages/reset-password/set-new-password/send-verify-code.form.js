import { utils } from '@tidb-community/common';

import { password, confirmPassword } from '~/form/fields';

const { buildInitialValues, buildSchema } = utils.form;

export const form = {
  password,
  confirmPassword,
};

export const formSchema = buildSchema(form);

export const initialValues = buildInitialValues(form);
