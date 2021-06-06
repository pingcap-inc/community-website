import { utils } from '@tidb-community/common';

import { identifier } from '~/form/fields';

const { buildSchema, buildInitialValues } = utils.form;

export const form = {
  identifier,
};

export const formSchema = buildSchema(form);

export const initialValues = buildInitialValues(form);
