import * as R from 'ramda';

export const getErrorMessage = (err) => {
  if (R.is(String, err)) {
    return err;
  }

  if (R.is(Object, err)) {
    if (!!err.detail) {
      return err.detail;
    } else if (!!err.message) {
      // blog api
      return err.message;
    }
  }

  if (R.is(Error, err)) {
    return err.message;
  }

  return err?.toString() || 'An unexpected error occurred';
};
