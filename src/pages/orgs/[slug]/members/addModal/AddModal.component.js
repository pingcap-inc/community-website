import * as R from 'ramda';
import React, { useState } from 'react';
import useSWR from 'swr';
import { Button, Checkbox } from 'antd';
import { CloseCircleFilled, CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { api } from '@tidb-community/datasource';
import { useDebounce } from 'ahooks';
import { useRouter } from 'next/router';

import * as Styled from './addModal.styled';
import * as utils from './addModal.utils';
import RoleDropdown from '../roleDropdown';
import { ROLE_KEYS, ROLE_NAMES } from '../members.constants';

const ModalContent = ({ mutateMembers, onCancel }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [role, setRole] = useState(ROLE_KEYS.MEMBER);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const debounced = useDebounce({ value: searchQuery, options: { wait: 300 } });
  const { slug } = router.query;
  const { value: word } = debounced;
  const { data: userResp } = useSWR(word && ['orgs.org.findUser', JSON.stringify({ slug, word })]);
  const users = R.propOr([], 'data')(userResp);

  const searchboxProps = {
    onChange: (e) => setSearchQuery(e.target.value),
    placeholder: '输入用户名搜索',
    prefix: <SearchOutlined />,
    suffix: searchQuery && <CloseCircleFilled onClick={(e) => setSearchQuery('')} />,
    value: searchQuery,
  };

  const roleDropdownProps = {
    onRoleMenuClick: (e) => {
      setRole(e.key);
    },
    role,
    roleName: ROLE_NAMES[role],
  };

  const onUserSelected = (user) => (e) => {
    if (e.target.checked) {
      setSelectedUsers([...selectedUsers, user]);
    } else {
      setSelectedUsers(selectedUsers.filter(({ id }) => id !== user.id));
    }
  };

  const onUserUnselected = (userId) => (e) => {
    setSelectedUsers(selectedUsers.filter((user) => user.id !== userId));
  };

  const onAdd = async (e) => {
    const userIds = selectedUsers.map(({ id }) => id);
    try {
      setIsSubmitting(true);
      await api.orgs.org.addMembers({ role, slug, userIds });
      mutateMembers();
      onCancel();
    } catch (err) {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Styled.Panel>
        <Styled.SearchWrapper>
          <Styled.Searchbox {...searchboxProps} />
        </Styled.SearchWrapper>

        <Styled.MemberList>
          {searchQuery &&
            users.map((user) => {
              const { id, username, avatar_url } = user;
              return (
                <Checkbox
                  key={id}
                  onChange={onUserSelected(user)}
                  checked={utils.isUserSelected({ user, selectedUsers })}
                >
                  <img alt={username} src={avatar_url} />
                  {username}
                </Checkbox>
              );
            })}
        </Styled.MemberList>
      </Styled.Panel>

      <Styled.Panel>
        <Styled.Header>已选：{selectedUsers.length}人</Styled.Header>

        <Styled.Content>
          {selectedUsers.map(({ id, username, avatar_url }) => (
            <Styled.SelectedUser key={id}>
              <img alt={username} src={avatar_url} />
              {username}
              <CloseOutlined onClick={onUserUnselected(id)} />
            </Styled.SelectedUser>
          ))}
        </Styled.Content>

        <Styled.Footer>
          <Styled.AssignRole>
            <label>添加为：</label>
            <RoleDropdown {...roleDropdownProps} />
          </Styled.AssignRole>
          <Button type="primary" size="small" onClick={onAdd} loading={isSubmitting}>
            添加
          </Button>
        </Styled.Footer>
      </Styled.Panel>
    </>
  );
};

const AddModal = ({ mutateMembers, onCancel, visible }) => {
  const modalProps = {
    centered: true,
    destroyOnClose: true,
    footer: null,
    onCancel,
    visible,
  };

  const contentProps = {
    mutateMembers,
    onCancel,
  };

  return (
    <Styled.Modal {...modalProps}>
      <ModalContent {...contentProps} />
    </Styled.Modal>
  );
};

export default AddModal;
