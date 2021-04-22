import * as R from 'ramda';

export const getErrorMessage = err => {
  if (R.is(String, err)) {
    return err;
  }
  if (R.is(Error, err)) {
    return err.message;
  }
  if (err) {
    err.toString();
  }
  return err
};
