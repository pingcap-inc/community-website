import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';

import { genMenu } from '../../utils/menu.utils';

const PlainMenu = ({ menuItems, currentNav, onNavClick }) => {
  const menu = genMenu({ items: menuItems, currentNav, onNavClick });
  return <Menu selectedKeys={[currentNav]}>{menu}</Menu>;
};

PlainMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  currentNav: PropTypes.string.isRequired,
  onNavClick: PropTypes.func.isRequired,
};

export default PlainMenu;
