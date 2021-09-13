import { capitalize } from './common.utils';

export const createSetters = (keys = []) =>
  keys.reduce((acc, key) => {
    acc[`set${capitalize(key)}`] = (state, action) => {
      state[key] = action.payload;
    };
    return acc;
  }, {});
