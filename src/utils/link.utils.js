export const handleRedirect = (router, link, browserLink) => {
  if (!link) return;

  // if the url has scheme, browserLink will be ignored
  if (link.startsWith('http')) {
    return window.open(link, '_blank').focus();
  }

  router.push(link, browserLink);
};
