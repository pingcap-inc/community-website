import * as R from 'ramda';

export const getErrorMessage = (err) => {
  if (R.is(String, err)) {
    return err;
  }

  if (R.is(Object, err) && !!err.detail) {
    return err.detail;
  }

  if (R.is(Error, err)) {
    return err.message;
  }

  return err?.toString() || 'An unexpected error occurred';
};
