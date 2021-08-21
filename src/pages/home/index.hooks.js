import { Grid } from 'antd';

export const useIsSmallScreen = () => {
  const breakpoint = Grid.useBreakpoint();

  return {
    isSmallScreen: !breakpoint.md,
    breakpoint,
  };
};
