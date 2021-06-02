import { message } from 'antd';
import { getErrorMessage } from '@tidb-community/common/utils/errors';

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
    message.error(getErrorMessage(error), 5);
    return error;
  }
};
