import { Grid } from 'antd';

export const useIsSmallScreen = () => {
  const bp = Grid.useBreakpoint();
  return !bp.md;
};
