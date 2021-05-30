import { utils } from '@tidb-community/common';

import { verifyCode } from '~/form/fields';

const { buildInitialValues, buildSchema } = utils.form;

export const form = {
  verifyCode,
};

export const formSchema = buildSchema(form);

export const initialValues = buildInitialValues(form);
