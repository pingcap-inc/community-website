import { useState } from 'react';
import { getErrorMessage } from './form.utils';

export const useCustomFormItems = () => {
  const [validationErrors, setValidationErrors] = useState(() => ({}));

  const buildFormItemProps = (name, err) => {
    if (name in validationErrors) {
      return {
        name,
        validateStatus: 'error',
        help: getErrorMessage(err || validationErrors[name]),
      };
    } else {
      return { name };
    }
  };

  const resetValidationErrors = () => {
    setValidationErrors({});
  };

  const parseApiError = ({ errors }) => {
    const validationErrors = {};
    for (const name in errors) {
      if (errors.hasOwnProperty(name)) {
        validationErrors[name] = errors[name][0];
      }
    }
    setValidationErrors(validationErrors);
  };

  return {
    buildFormItemProps,
    resetValidationErrors,
    parseApiError,
  };
};
