import React from 'react';

import { Header, Footer } from 'styled/components';

const Core = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Core;
