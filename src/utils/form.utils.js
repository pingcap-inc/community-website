import { api } from '@tidb-community/datasource';
import { utils } from '@tidb-community/common';

export const wrapFormikSubmitFunction = (func) =>
  utils.form.wrapFormikSubmitFunction(func, api.events.dispatchApiError);
