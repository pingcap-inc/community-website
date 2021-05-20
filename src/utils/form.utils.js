import { api } from '@tidb-community/datasource';

// make sure calling api has set `isDispatchApiErrorDisabled`
export const wrapFormikSubmitFunction = (func) => {
  return (params, formikHelpers) => {
    return func(params).catch((response) => {
      if (response.errors) {
        formikHelpers.setErrors(response.errors);
      } else {
        // dispatch unhandled events to global.
        api.events.dispatchApiError(response);
      }
    });
  };
};
