import '@tidb-community/ui/antd/global.less';
import React from 'react';
import ReactDOM from 'react-dom';

import HeaderFooter from './HeaderFooter.component';

if (!window._tidb) {
  window._tidb = {
    uiScripts: {},
  };
}

window._tidb.uiScripts = {
  ...window._tidb.uiScripts,

  headerFooter: {
    init: ({ headerEl, ...props }) => {
      ReactDOM.render(<HeaderFooter {...props} />, headerEl);
    },
  },
};
