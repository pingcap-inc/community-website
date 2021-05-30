import { buildInitialValues, buildSchema } from '@tidb-community/common/utils/form';

import { identifier } from '~/form/fields';

export const form = {
  identifier,
};

export const formSchema = buildSchema(form);

export const initialValues = buildInitialValues(form);
