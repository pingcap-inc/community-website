import * as utils from './utils';

export const logPageView = (options = {}) => {
  const { location, screen } = window;

  const params = Object.assign(
    {
      dl: location.href,
      dr: document.referrer,
      dt: document.title,
      sr: screen.width + 'x' + screen.height,
      ts: utils.getCurrentTS(),
      ul: navigator.language || navigator.userLanguage,
    },
    options
  );

  utils.sendLog('pageview', params);
};
