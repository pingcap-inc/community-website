import { createContext } from 'react';

export const AuthContext = createContext({
  login: undefined,
  logout: undefined,
});
