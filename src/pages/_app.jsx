import React from 'react';
import 'antd/dist/antd.css';

import 'styles/globals.css';
import 'components/Container/Container.scss';
import 'components/Button/Button.scss';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar forceNonTransparent />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
