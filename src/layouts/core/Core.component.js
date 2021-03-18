import React from 'react';

import { Header, Footer } from '@pingcap/pingpac-ui';

const Core = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Core;
