import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Dropdown, Menu } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import * as Styled from './userProfile.styled';
import { t } from './userProfile.locale';
import { menu as menuUtils } from '../../utils';

const genMenu = ({ meData, _t, currentNav, onNavClick }) => {
  const items = [];
  if (meData.org) {
    items.push({
      title: _t('my-org'),
      link: `https://tug.tidb.io/orgs/${meData.org.slug}/members`,
    });
  } else {
    items.push({
      title: _t('join-org'),
      link: 'https://tug.tidb.io/account/organization/new',
    });
  }

  items.push({
    title: _t('log-out'),
    link: 'https://tug.tidb.io/signout',
  });

  return menuUtils.genMenu({ items, currentNav, onNavClick });
};

const UserProfile = ({ meData, onClickLogin, locale, currentNav, onNavClick }) => {
  const _t = t(locale);

  if (meData) {
    return (
      <>
        <Dropdown
          arrow
          placement='bottomRight'
          overlay={
            <Menu>
              {genMenu({ meData, currentNav, onNavClick, _t })}
            </Menu>
          }
        >
          <Styled.UserButton type='text' size='small'>
            <Avatar size={30}>
              <UserOutlined />
            </Avatar>
            <DownOutlined />
          </Styled.UserButton>
        </Dropdown>
      </>
    );
  } else {
    return (
      <Button type='primary' size='small' icon={<UserOutlined />} onClick={onClickLogin}>{_t('login')}</Button>
    );
  }
};

UserProfile.propTypes = {
  meData: PropTypes.object,
  onClickLogin: PropTypes.func,
  locale: PropTypes.oneOf(['zh', 'en']),
  currentNav: PropTypes.string.isRequired,
  onNavClick: PropTypes.func.isRequired,
};

export default UserProfile;
