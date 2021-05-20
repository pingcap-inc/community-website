import * as R from 'ramda';
import * as Yup from 'yup';

export const getErrorMessage = (err) => {
  if (R.is(String, err)) {
    return err;
  }
  if (R.is(Object, err) && 'details' in err) {
    return err.details;
  }
  if (R.is(Error, err)) {
    return err.message;
  }
  if (err) {
    err.toString();
  }
  return err;
};

export const buildScheme = (formData) => {
  const iterateObject = (obj, scheme) => {
    const { name, validator, ...rest } = obj;
    if (name && validator) {
      scheme[name] = validator;
      delete obj.validator;
    }
    for (const key in rest) {
      if (rest.hasOwnProperty(key)) {
        if (R.is(Array, rest[key])) {
          for (const item of rest[key]) {
            iterateObject(item, scheme);
          }
        } else if (R.is(Object, rest[key])) {
          iterateObject(rest[key], scheme);
        }
      }
    }
  };
  const scheme = {};
  iterateObject(formData, scheme);

  return Yup.object().shape(scheme);
};

export const buildInitialValues = (formData) => {
  const iterateObject = (obj, initialValues) => {
    const { name, initialValue, ...rest } = obj;
    if (name && 'initialValue' in obj) {
      initialValues[name] = initialValue;
      delete obj.initialValue;
    }
    for (const key in rest) {
      if (rest.hasOwnProperty(key)) {
        if (R.is(Array, rest[key])) {
          for (const item of rest[key]) {
            iterateObject(item, initialValues);
          }
        } else if (R.is(Object, rest[key])) {
          iterateObject(rest[key], initialValues);
        }
      }
    }
  };
  const initialValues = {};
  iterateObject(formData, initialValues);

  return initialValues;
};
