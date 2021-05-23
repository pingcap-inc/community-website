import { api } from '@tidb-community/datasource';
import { utils } from '@tidb-community/common';

export const wrapFormikSubmitFunction = (func) => utils.wrapFormikSubmitFunction(func, api.events.dispatchApiError);
