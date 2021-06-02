import { utils } from '@tidb-community/common';

import * as commonFields from '../modal.fields';

const { buildInitialValues, buildSchema } = utils.form;

export const fields = {
  newPassword: commonFields.newPassword(),
  confirmPassword: commonFields.confirmPassword(),
};

export const initialValues = buildInitialValues(fields);

export const schema = buildSchema(fields);
