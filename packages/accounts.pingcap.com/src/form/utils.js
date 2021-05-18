import * as Yup from 'yup';

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
