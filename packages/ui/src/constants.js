import { stripUnit } from 'polished';

export const appClassName = 'tidb-community-ui';

export const responsiveWidths = {
  xl: '1344px',
  lg: '1152px',
  md: '960px',
};

export const breakPoints = Object.entries(responsiveWidths).reduce((acc, [k, v]) => {
  acc[k] = `${stripUnit(v) + 64}px`;
  return acc;
}, {});
