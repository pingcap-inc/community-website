import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Badge, Dropdown, Menu } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import * as Styled from './userProfile.styled';
import { menu as menuUtils } from '../../utils';
import { t } from './userProfile.locale';

const UserProfile = ({ avatarUrl, currentNav, items, locale, onLoginClick, onLogoutClick, onNavClick }) => {
  const _t = t(locale);

  if (items) {
    const isShowBadge = items.some((item) => !!item.badge);

    return (
      <Dropdown
        arrow
        placement="bottomRight"
        overlay={<Menu>{menuUtils.genMenu({ items, currentNav, onNavClick, onLogoutClick, _t })}</Menu>}
      >
        <Styled.UserButton type="text" size="small">
          <Badge dot={isShowBadge}>
            <Avatar size={20} src={avatarUrl}>
              <UserOutlined />
            </Avatar>
          </Badge>
          <DownOutlined />
        </Styled.UserButton>
      </Dropdown>
    );
  }

  return (
    <Styled.LoginButton type="primary" size="small" icon={<UserOutlined />} onClick={onLoginClick}>
      {_t('login')}
    </Styled.LoginButton>
  );
};

UserProfile.propTypes = {
  avatarUrl: PropTypes.string,
  currentNav: PropTypes.string,
  items: PropTypes.array,
  locale: PropTypes.oneOf(['zh', 'en']),
  onLoginClick: PropTypes.func,
  onLogoutClick: PropTypes.func,
  onNavClick: PropTypes.func,
};

export default UserProfile;
