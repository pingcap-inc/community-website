import { Menu } from 'antd';
import React from 'react';
import styled from 'styled-components';

const HiddenMenuItem = styled(Menu.Item)`
  display: none !important;
`

export const genMenu = ({ items, currentNav, onNavClick }) => {
  const onItemClick = (link, browserLink) => (e) => {
    const { isSelected } = e.item.props;
    onNavClick({
      link,
      browserLink,
      isSelected,
    });
  };

  return items.map((item) => {
    const { title, items, link, browserLink } = item;

    if (items) {
      const onSubMenuClick = () => {
        onNavClick({
          link,
          browserLink,
          isSelected: currentNav === title,
        });
      };

      const subMenuProps = {
        key: title,
        title: link ? <span onClick={onSubMenuClick}>{title}</span> : title,
      };

      return (
        <Menu.SubMenu {...subMenuProps}>
          {link && <HiddenMenuItem key={title} onClick={onItemClick(link, browserLink)} />}
          {
            // eslint-disable-next-line no-unused-vars
            genMenu({ items, onNavClick })
          }
        </Menu.SubMenu>
      );
    }

    return (
      <Menu.Item key={title} onClick={onItemClick(link, browserLink)}>
        {title}
      </Menu.Item>
    );
  });
};
