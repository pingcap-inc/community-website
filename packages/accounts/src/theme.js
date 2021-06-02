import { createContext } from 'react';

export const ThemeContext = createContext({
  size: '', // small normal
});

export const SIZES = {
  small: 'small',
  large: 'large',
};

const SIZE_BREAKPOINTS = {
  [SIZES.small]: 480,
  [SIZES.large]: 99999,
};

export const getSize = (width) => {
  for (let [size, breakpoint] of Object.entries(SIZE_BREAKPOINTS)) {
    if (width < breakpoint) {
      return size;
    }
  }
};
