import React from 'react';

import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';

const CoreLayout = ({ children }) => (
  <>
    <Navbar forceNonTransparent />
    {children}
    <Footer />
  </>
);

export default CoreLayout;
