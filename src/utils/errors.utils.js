import * as R from 'ramda';
import { utils } from '@tidb-community/ui';

export const getFirstApiErrorMsg = (err) => {
  if (R.is(Object, err)) {
    if ('errors' in err) {
      return Object.values(err.errors).join(' ');
    }
    if ('detail' in err) {
      return err.detail;
    }
  }
  return utils.errors.getErrorMessage(err);
};
