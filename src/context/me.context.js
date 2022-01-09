import { createContext } from 'react';

export const MeContext = createContext({
  meData: undefined,
  mutateMe: undefined,
  isMeValidating: undefined,
});

MeContext.displayName = 'MeContext';
