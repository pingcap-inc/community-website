import { createContext } from 'react';

export const PageDataContext = createContext({
  data: undefined,
});

PageDataContext.displayName = 'PageDataContext';
