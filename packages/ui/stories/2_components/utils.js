import * as R from 'ramda';

export const getTitle = (title) => `Components/${title}`;

export const disableControl = (fields) => {
  if (R.is(String, fields)) {
    fields = [fields];
  }

  return fields.reduce(
    (acc, item) => ({
      ...acc,
      [item]: {
        control: false,
      },
    }),
    {}
  );
};
