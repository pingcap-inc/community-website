import * as R from 'ramda';

export const pageWidths = {
  xl: 1344,
  lg: 1152,
  md: 960,
};

export const breakPoints = R.reduce(
  ([k, v]) => ({
    [k]: v + 32,
  }),
  {},
  R.toPairs(pageWidths)
);
