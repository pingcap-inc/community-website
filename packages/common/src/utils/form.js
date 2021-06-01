import * as R from 'ramda';
import * as Yup from 'yup';
import { useEffect, useRef } from 'react';
import { useFormikContext } from 'formik';

import { getErrorMessage, getFirstApiError } from './errors';

export const buildSchema = (formData) => {
  const iterateObject = (obj, schema) => {
    const { name, validator, ...rest } = obj;
    if (name && validator) {
      schema[name] = validator;
      delete obj.validator;
    }
    for (const key in rest) {
      if (rest.hasOwnProperty(key)) {
        if (R.is(Array, rest[key])) {
          for (const item of rest[key]) {
            iterateObject(item, schema);
          }
        } else if (R.is(Object, rest[key])) {
          iterateObject(rest[key], schema);
        }
      }
    }
  };
  const schema = {};
  iterateObject(formData, schema);

  return Yup.object().shape(schema);
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

/**
 * wrap a action method with formik field errors displaying.
 *
 * if throwErrors is ture, errors returned by onError() will be raised
 * @param {function(*): Promise} func action method, should returns a promise
 * @param onError handle non-recognizable errors.
 * @param throwErrors should throw errors if any error caught.
 * @return {function(*=, *): *} wrapped method, the second method should be a object contains setErrors and setTouched.
 */
export const wrapFormikSubmitFunction = (func, onError, throwErrors = false) => {
  return (params, formikHelpers) => {
    return func(params).catch((response) => {
      if (response.errors) {
        if ('__all__' in response.errors) {
          onError(response.errors.__all__);
        } else {
          formikHelpers.setTouched(
            Object.keys(response.errors).reduce((prev, key) => {
              prev[key] = true;
              return prev;
            }, {}),
            false
          );
          formikHelpers.setErrors(response.errors);
        }
        if (throwErrors) {
          return Promise.reject(response);
        }
      } else {
        const err = onError(response);
        if (throwErrors && err) {
          return Promise.reject(err);
        }
      }
    });
  };
};

// reset form state when field change
// returns the value of the field
export const useFormikFieldAsOption = (fieldName) => {
  const { resetForm, values } = useFormikContext();
  const type = values[fieldName];

  const localState = useRef({});

  useEffect(() => {
    Object.assign(localState.current, values);
  }, [localState, values]);

  useEffect(() => {
    resetForm({ values: localState.current });
  }, [localState, resetForm, type]);

  return type;
};

export const conditionalField = (field, { value, is }) => {
  if (!field.validator) {
    return field;
  }

  const { validator, ...rest } = field;

  return {
    ...rest,
    validator: Yup.mixed().when([value], {
      is,
      then: validator,
    }),
  };
};

export const createYupRemoteValidator = (baseSchema, name, validator, cache = true) => {
  const cached = {};

  const test = async function (value) {
    try {
      await validator(value);
      return true;
    } catch (err) {
      const firstErr = getFirstApiError(err);
      if (!firstErr) {
        return new Yup.ValidationError(getErrorMessage(err), value, this.path);
      } else {
        const [key, err] = firstErr;
        return new Yup.ValidationError(err, value, key);
      }
    }
  };

  Yup.addMethod(baseSchema, name, function () {
    return this.test({
      name,
      exclusive: true,
      test: function (value) {
        if (cache) {
          if (value in cached) {
            return cached[value];
          } else {
            return (cached[value] = test.call(this, value));
          }
        } else {
          return test.call(this, value);
        }
      },
    });
  });
};

export const getRecaptchaToken = (recaptchaKey) =>
  new Promise((resolve, reject) => {
    window.grecaptcha?.ready(() => {
      window.grecaptcha?.execute(recaptchaKey, { action: 'submit' }).then(resolve).catch(reject);
    });
  });
