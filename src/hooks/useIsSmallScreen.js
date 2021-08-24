import { Grid } from 'antd';

const useIsSmallScreen = () => {
  const breakpoint = Grid.useBreakpoint();

  return {
    isSmallScreen: !breakpoint.md,
    breakpoint,
  };
};

export default useIsSmallScreen;
