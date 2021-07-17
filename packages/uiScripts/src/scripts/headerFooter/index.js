import '@tidb-community/ui/antd/global.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';
import { constants } from '@tidb-community/ui';

import HeaderFooter from './HeaderFooter.component';
import { fetcher } from '~/utils';

if (!window._tidb) {
  window._tidb = {
    uiScripts: {},
  };
}

window._tidb.uiScripts = {
  ...window._tidb.uiScripts,

  headerFooter: {
    init: ({ headerEl, footerEl, ...props }) => {
      [headerEl, footerEl].forEach((el) => {
        el.classList.add(constants.appClassName);
      });
      ReactDOM.render(
        <SWRConfig
          value={{
            fetcher,
            revalidateOnFocus: false,
          }}
        >
          <HeaderFooter footerEl={footerEl} {...props} />
        </SWRConfig>,
        headerEl
      );
    },
  },
};
