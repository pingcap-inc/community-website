import { createContext } from 'react';

export const NavContext = createContext({
  currentNav: undefined,
  navData: undefined,
  onNavClick: undefined,
});
