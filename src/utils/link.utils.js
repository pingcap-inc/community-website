const hostRegexp = /https?:\/\/(?:tug\.)?tidb\.io\//;

export const handleRedirect = (router, link) => {
  if (!link) return;

  if (process.env.NODE_ENV !== 'production') {
    link = link.replace(hostRegexp, window.location.origin + '/');
  }

  if (link.startsWith('http')) {
    return window.open(link, '_blank');
  }

  router.push(link);
};
