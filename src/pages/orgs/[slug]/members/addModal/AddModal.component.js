import React, { useState } from 'react';
import useSWR from 'swr';
import { Checkbox } from 'antd';
import { CloseCircleFilled, SearchOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

import * as Styled from './addModal.styled';

const AddModal = (props) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const { data: userResp } = useSWR([
    'orgs.org.findUser',
    JSON.stringify({ slug: router.query.slug, word: searchQuery }),
  ]);

  const searchboxProps = {
    value: searchQuery,
    onChange: (e) => setSearchQuery(e.target.value),
    placeholder: '输入用户名搜索',
    prefix: <SearchOutlined />,
    suffix: <CloseCircleFilled onClick={(e) => setSearchQuery('')} />,
  };

  return (
    <Styled.Modal {...props}>
      <Styled.Panel>
        <Styled.SearchWrapper>
          <Styled.Searchbox {...searchboxProps} />
        </Styled.SearchWrapper>

        <Styled.MemberList>
          {userResp?.data.map(({ id, username, avatar_url }) => (
            <Checkbox key={id}>
              <img alt={username} src={avatar_url} />
              {username}
            </Checkbox>
          ))}
        </Styled.MemberList>
      </Styled.Panel>

      <Styled.Panel>Members</Styled.Panel>
    </Styled.Modal>
  );
};

export default AddModal;
