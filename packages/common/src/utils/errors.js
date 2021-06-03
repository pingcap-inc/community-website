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

export const getFirstApiErrorMsg = (err) => {
  if (R.is(Object, err)) {
    if ('errors' in err) {
      return Object.values(err.errors).join(' ');
    }
    if ('detail' in err) {
      return err.detail;
    }
  }
  return getErrorMessage(err);
};

export const getFirstApiError = (err) => {
  if (R.is(Object, err)) {
    if ('errors' in err) {
      const keys = Object.keys(err.errors).filter((key) => key !== '__all__');
      if (keys.length > 0) {
        return [keys[0], err.errors[keys[0]]];
      }
    }
  }
  return undefined;
};
