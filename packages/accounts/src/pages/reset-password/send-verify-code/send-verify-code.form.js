import { buildInitialValues, buildScheme } from '@tidb-community/common/utils/form';

import { identifier } from '~/form/fields';

export const form = {
  identifier,
};

export const formScheme = buildScheme(form);

export const initialValues = buildInitialValues(form);
