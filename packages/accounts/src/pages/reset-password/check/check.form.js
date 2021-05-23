import { utils } from '@tidb-community/common';

import { verifyCode } from '../../../form/fields';

const { buildInitialValues, buildScheme } = utils.form;

export const form = {
  verifyCode,
};

export const formScheme = buildScheme(form);

export const initialValues = buildInitialValues(form);
