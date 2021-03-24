export const handleRedirect = (router, link) => {
  if (!link) return;

  if (link.startsWith('http')) {
    return window.open(link, '_blank');
  }

  router.push(link);
};
