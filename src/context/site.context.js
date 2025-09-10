import { createContext } from 'react';

export const SiteContext = createContext({
  banner: null,
});

SiteContext.displayName = 'SiteContext';
