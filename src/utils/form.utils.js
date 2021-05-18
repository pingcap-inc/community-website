import { api } from '@tidb-community/datasource';
import { wrapFormikSubmitFunction as commonWrapFormikSubmitFunction } from 'commons/utils/form';

export const wrapFormikSubmitFunction = (func) => commonWrapFormikSubmitFunction(func, api.events.dispatchApiError);
