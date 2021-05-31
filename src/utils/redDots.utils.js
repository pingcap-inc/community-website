import { camelize } from './string.utils';

export const transformRespToMap = (resp) => {
  const { data = [] } = resp;

  return data.reduce(
    (acc, item) => ({
      ...acc,
      [camelize(item.name)]: item.visible,
    }),
    {}
  );
};
