import { buildInitialValues, buildScheme } from 'commons/utils/form';

import { password, confirmPassword } from '../../../form/fields';

export const form = {
  password,
  confirmPassword,
};

export const formScheme = buildScheme(form);

export const initialValues = buildInitialValues(form);
