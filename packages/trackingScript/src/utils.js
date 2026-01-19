const getCookie = (cname) => {
  const name = cname + '=';
  const ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
};

export const getCurrentTS = () => new Date().getTime();

export const sendLog = (logType, params) => {
  let eventUrl = 'https://pingkai.cn/accounts/_analytics/event?';

  // version
  params.v = 1;
  params.e = logType;

  const uid = getCookie('uid');
  if (uid) {
    params.uid = uid;
  }

  const paramsArr = [];
  Object.keys(params).forEach((item) => {
    if (typeof params[item] !== 'undefined') {
      paramsArr.push(item + '=' + encodeURIComponent(params[item]));
    }
  });

  eventUrl += paramsArr.join('&');

  const oReq = new XMLHttpRequest();
  oReq.open('GET', eventUrl);
  oReq.withCredentials = true;
  oReq.send();
};
