export const getCurrentNav = (navItems, link) => {
  for (let i = 0, l = navItems.length; i < l; i++) {
    const { title, items, link: navLink } = navItems[i];
    if (navLink && link === navLink) {
      return title;
    }
    if (items) {
      const currentNav = getCurrentNav(items, link);
      if (currentNav && currentNav !== UNKNOWN_NAV) return currentNav;
    }
  }

  return UNKNOWN_NAV;
};

export const UNKNOWN_NAV = 'UNKNOWN_NAV';
