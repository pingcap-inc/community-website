import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Dropdown, Menu } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import * as Styled from './userProfile.styled';
import { t } from './userProfile.locale';
import { menu as menuUtils } from '../../utils';

const UserProfile = ({ avatarUrl, items, onClickLogin, locale, currentNav, onNavClick }) => {
  const _t = t(locale);

  if (items) {
    return (
      <>
        <Dropdown
          arrow
          placement="bottomRight"
          overlay={<Menu>{menuUtils.genMenu({ items, currentNav, onNavClick, _t })}</Menu>}
        >
          <Styled.UserButton type="text" size="small">
            <Avatar size={20} src={avatarUrl}>
              <UserOutlined />
            </Avatar>
            <DownOutlined />
          </Styled.UserButton>
        </Dropdown>
      </>
    );
  } else {
    return (
      <Button type="primary" size="small" icon={<UserOutlined />} onClick={onClickLogin}>
        {_t('login')}
      </Button>
    );
  }
};

UserProfile.propTypes = {
  avatarUrl: PropTypes.string,
  items: PropTypes.array,
  onClickLogin: PropTypes.func,
  locale: PropTypes.oneOf(['zh', 'en']),
  currentNav: PropTypes.string.isRequired,
  onNavClick: PropTypes.func.isRequired,
};

export default UserProfile;
