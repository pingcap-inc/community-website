import * as utils from './utils';

export const logPageView = () => {
  const { location, screen } = window;

  utils.sendLog('pageview', {
    dl: location.href,
    dr: document.referrer,
    dt: document.title,
    sr: screen.width + 'x' + screen.height,
    ts: utils.getCurrentTS(),
    ul: navigator.language || navigator.userLanguage,
  });
};
