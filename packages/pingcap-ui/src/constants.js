import * as polished from 'polished';

export const responsiveWidths = {
  xl: '1344px',
  lg: '1152px',
  md: '960px',
};

export const breakPoints = Object.entries(responsiveWidths).reduce((acc, [k, v]) => {
  acc[k] = `${polished.stripUnit(v) + 64}px`;
  return acc;
}, {});
