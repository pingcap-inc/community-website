import { stripUnit } from 'polished';

export const appClassName = 'tidb-community-ui';

export const responsiveWidths = {
  xl: '1200px',
  lg: '1200px',
  md: '1200px',
};

export const breakPoints: typeof responsiveWidths = Object.entries(responsiveWidths).reduce((acc, [k, v]) => {
  acc[k] = `${(stripUnit(v) as number) + 64}px`;
  return acc;
}, {} as typeof responsiveWidths);
