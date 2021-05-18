import * as R from 'ramda';
import * as Yup from 'yup';

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

export const wrapFormikSubmitFunction = (func, onError) => {
  return (params, formikHelpers) => {
    return func(params).catch((response) => {
      if (response.errors) {
        formikHelpers.setErrors(response.errors);
      } else {
        onError(response);
      }
    });
  };
};
