import { Badge, Menu } from 'antd';
import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';

const HiddenMenuItem = styled(Menu.Item)`
  display: none !important;
`;

export const genMenu = ({ items, currentNav, onNavClick, ...events }) => {
  const onItemClick =
    ({ link, browserLink, target, event }) =>
    (e) => {
      if (event) {
        if (R.is(Function, events[event])) {
          events[event](e);
          return;
        }
      }
      const { isSelected } = e.item.props;
      onNavClick({
        link,
        browserLink,
        isSelected,
        target,
      });
    };

  return items
    .filter((item) => !item.hidden) // This is used for getting current nav but not really nav item.
    .flatMap((item) => {
      const { badge, divider, title, items, link, browserLink, target, event } = item;

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

        if (badge) {
          subMenuProps.title = <Badge dot>{subMenuProps.title}</Badge>;
        }

        return [
          <Menu.SubMenu {...subMenuProps}>
            {link && <HiddenMenuItem key={title} onClick={onItemClick({ link, browserLink, target, event })} />}
            {
              // eslint-disable-next-line no-unused-vars
              genMenu({ items, onNavClick })
            }
          </Menu.SubMenu>,
        ];
      }

      const disabled = !R.is(String, link) && !R.is(String, event);
      const Divider = divider ? <Menu.Divider key={`${title}__divider`} /> : undefined;

      if (R.is(Number, badge)) {
        return [
          <Menu.Item key={title} onClick={onItemClick({ link, browserLink, target, event })} disabled={disabled}>
            <Badge dot={badge > 0}>{title}</Badge>
          </Menu.Item>,
          Divider,
        ];
      } else {
        return [
          <Menu.Item key={title} onClick={onItemClick({ link, browserLink, target, event })} disabled={disabled}>
            {title}
          </Menu.Item>,
          Divider,
        ];
      }
    });
};
