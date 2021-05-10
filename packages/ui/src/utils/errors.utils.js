import * as R from 'ramda';

export const getErrorMessage = (err) => {
  if (R.is(String, err)) {
    return err;
  }
  if (R.is(Object, err)) {
    if ('detail' in err) {
      return err.detail;
    }
  }
  if (R.is(Error, err)) {
    return err.message;
  }
  if (err) {
    err.toString();
  }
  return err;
};
