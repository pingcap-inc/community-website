import * as R from 'ramda';
import React, { useState } from 'react';
import useSWR from 'swr';
import { Button, Checkbox } from 'antd';
import { CloseCircleFilled, SearchOutlined } from '@ant-design/icons';
import { useDebounce } from 'ahooks';
import { useRouter } from 'next/router';

import * as Styled from './addModal.styled';

const AddModal = ({ onCancel, visible }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const debounced = useDebounce({ value: searchQuery, options: { wait: 300 } });

  const word = debounced.value;

  const { data: userResp } = useSWR(word && ['orgs.org.findUser', JSON.stringify({ slug: router.query.slug, word })]);

  const users = R.propOr([], 'data')(userResp);

  const searchboxProps = {
    onChange: (e) => setSearchQuery(e.target.value),
    placeholder: '输入用户名搜索',
    prefix: <SearchOutlined />,
    suffix: searchQuery && <CloseCircleFilled onClick={(e) => setSearchQuery('')} />,
    value: searchQuery,
  };

  const modalProps = {
    centered: true,
    footer: null,
    onCancel: () => {
      setSearchQuery('');
      onCancel();
    },
    visible,
  };

  return (
    <Styled.Modal {...modalProps}>
      <Styled.Panel>
        <Styled.SearchWrapper>
          <Styled.Searchbox {...searchboxProps} />
        </Styled.SearchWrapper>

        <Styled.MemberList>
          {searchQuery &&
            users.map(({ id, username, avatar_url }) => (
              <Checkbox key={id}>
                <img alt={username} src={avatar_url} />
                {username}
              </Checkbox>
            ))}
        </Styled.MemberList>
      </Styled.Panel>

      <Styled.Panel>
        <Styled.Header>已选：{users.length}人</Styled.Header>
        <Styled.Content>Content</Styled.Content>
        <Styled.Footer>
          <Styled.AssignRole>添加为：</Styled.AssignRole>
          <Button type="primary" size="small">
            添加
          </Button>
        </Styled.Footer>
      </Styled.Panel>
    </Styled.Modal>
  );
};

export default AddModal;
