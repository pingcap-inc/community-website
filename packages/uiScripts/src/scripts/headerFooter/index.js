import '@tidb-community/ui/antd/global.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { constants } from '@tidb-community/ui';

import HeaderFooter from './HeaderFooter.component';

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
      ReactDOM.render(<HeaderFooter footerEl={footerEl} {...props} />, headerEl);
    },
  },
};
