import React from 'react';
import ReactDOM from 'react-dom';

import HeaderFooter from './HeaderFooter.component';

if (!window._tidb) window._tidb = {};
window._tidb.sharedUI = {
  initHeaderFooter({ locale, title, logoSrc, headerEl, footerEl }) {
    ReactDOM.render(<HeaderFooter footerEl={footerEl} locale={locale} title={title} logoSrc={logoSrc} />, headerEl);
  },
};
