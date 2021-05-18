import { createContext } from 'react';

export const NavContext = createContext({
  navData: undefined,
  login: undefined,
  onNavClick: undefined,
  currentNav: undefined,
});
