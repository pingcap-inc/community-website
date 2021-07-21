import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';

import ContactUs from './ContactUs.component';
import { fetcher, handleBaseUrlMapping } from '~/utils';

handleBaseUrlMapping();

ReactDOM.render(
  <SWRConfig
    value={{
      fetcher,
    }}
  >
    <ContactUs />
  </SWRConfig>,
  document.body.appendChild(document.createElement('div'))
);
