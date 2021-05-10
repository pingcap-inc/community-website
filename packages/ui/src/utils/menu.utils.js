import { Badge, Menu } from 'antd';
import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda'

const HiddenMenuItem = styled(Menu.Item)`
  display: none !important;
`;

export const genMenu = ({ items, currentNav, onNavClick }) => {
  const onItemClick = (link, browserLink) => (e) => {
    const { isSelected } = e.item.props;
    onNavClick({
      link,
      browserLink,
      isSelected,
    });
  };

  return items
    .filter(item => !item.hidden) // This is used for getting current nav but not really nav item.
    .map((item) => {
      const { badge, title, items, link, browserLink } = item;

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

      if (R.is(Number, badge)) {
        return (
          <Menu.Item key={title} onClick={onItemClick(link, browserLink)}>
            <Badge dot={badge > 0}>
              {title}
            </Badge>
          </Menu.Item>
        );
      } else {
        return (
          <Menu.Item key={title} onClick={onItemClick(link, browserLink)}>
            {title}
          </Menu.Item>
        );
      }
    });
};
