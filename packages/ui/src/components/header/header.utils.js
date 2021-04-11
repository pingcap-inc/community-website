export const getCurrentNav = (navItems, link) => {
  for (let i = 0, l = navItems.length; i < l; i++) {
    const { title, items, link: navLink } = navItems[i];
    if (navLink && link === navLink) {
      return title;
    }
    if (items) {
      const currentNav = getCurrentNav(items, link);
      if (currentNav) return currentNav;
    }
  }
};
