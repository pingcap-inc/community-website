import * as R from 'ramda';
import PropTypes from 'prop-types';

import { useFormikFieldAsOption } from '../utils/form';

const renderChildren = ({ children, value, key }) => {
  if (R.is(Function, children)) {
    return children({ option: value, key });
  }
  if (R.is(Array, children)) {
    return children.map((child, index) => renderChildren({ children, value, index }));
  }
  return children;
};

const FormikOption = ({ fieldName, children }) => {
  const value = useFormikFieldAsOption(fieldName);

  return renderChildren({ children, value });
};

FormikOption.propTypes = {
  fieldName: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.element]).isRequired,
};

export default FormikOption;
