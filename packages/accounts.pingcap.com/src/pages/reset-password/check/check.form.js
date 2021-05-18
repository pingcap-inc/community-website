import { verifyCode } from '../../../form/fields';
import { buildInitialValues, buildScheme } from 'commons/utils/form';

export const form = {
  verifyCode,
};

export const formScheme = buildScheme(form);

export const initialValues = buildInitialValues(form);
