import { message } from 'antd';
import * as Sentry from '@sentry/react';
import { utils } from '@tidb-community/common';

const { getErrorMessage } = utils.errors;

// an expected error will not be treated as an error in handleError (thus, not returned)
export const expectedError = (error) => {
  return {
    __isExpectedError: true,
    error,
  };
};

// TODO: add sentry?
export const handleError = (error) => {
  if (error?.__isExpectedError) {
    message.error(getErrorMessage(error.error), 5);
  } else {
    // unexpected error will be returned. and it should be handled by caller
    Sentry.captureException(error);
    message.error(getErrorMessage(error), 5);
    return error;
  }
};
