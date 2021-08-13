import * as utils from './utils';

const { location, screen } = window;

export const logPageView = () => {
  utils.sendLog('pageview', {
    dl: location.href,
    dr: document.referrer,
    dt: document.title,
    sr: screen.width + 'x' + screen.height,
    ts: utils.getCurrentTS(),
    ul: navigator.language || navigator.userLanguage,
  });
};
