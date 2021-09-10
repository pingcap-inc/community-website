import * as R from 'ramda';

import { ROLE_KEYS } from '~/constants';

// https://stackoverflow.com/a/60738940/14257627
export const camelize = (str) => str.replace(/-./g, (x) => x[1].toUpperCase());

export const isEmptyOrNil = R.anyPass([R.isEmpty, R.isNil]);

export const isAdmin = (meData) => {
  return R.pathEq(['org', 'role'], ROLE_KEYS.ADMIN)(meData);
};

export const getStrapiImgProps = (imgObj) => {
  const img = imgObj[0];

  return {
    src: `${process.env.NEXT_PUBLIC_CDN_BASE_URL || process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${img.url}`,
    ...R.pick(['width', 'height'], img),
  };
};
