/**
 * get current nav title by comparing navItems and current pathname.
 *
 * @param navItems
 * @param link Current route's pathname
 * @param linkPrefixRegexp Some nav items could contains host prefix, which will leads to false result. Before
 * comparing, current site's host should be replaced by blank string for computing proper nav title.
 * See https://community-product.atlassian.net/browse/CPT-97
 * @return {string} Current nav title
 */
export const getCurrentNav = (navItems, link, linkPrefixRegexp = /^/) => {
  for (let i = 0, l = navItems.length; i < l; i++) {
    const { title, items, link: navLink } = navItems[i];
    if (navLink && link === navLink.replace(linkPrefixRegexp, '')) {
      return title;
    }
    if (items) {
      const currentNav = getCurrentNav(items, link, linkPrefixRegexp);
      if (currentNav) return currentNav;
    }
  }
};
