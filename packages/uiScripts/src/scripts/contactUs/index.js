import React from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';

import ContactUs from './ContactUs.component';
import { fetcher } from '~/utils';

ReactDOM.render(
  <SWRConfig
    value={{
      fetcher,
      revalidateOnFocus: false,
    }}
  >
    <ContactUs />
  </SWRConfig>,
  document.body.appendChild(document.createElement('div'))
);
