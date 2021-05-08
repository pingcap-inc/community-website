import React, { useState } from 'react';
import { CloseCircleFilled, SearchOutlined } from '@ant-design/icons';

import * as Styled from './addModal.styled';

const AddModal = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchboxProps = {
    value: searchQuery,
    onChange: (e) => setSearchQuery(e.value),
    placeholder: '输入用户名搜索',
    prefix: <SearchOutlined />,
    suffix: <CloseCircleFilled onClick={(e) => setSearchQuery('')} />,
  };

  return (
    <Styled.Modal {...props}>
      <Styled.Panel>
        <Styled.Searchbox {...searchboxProps} />
      </Styled.Panel>
      <Styled.Panel>Members</Styled.Panel>
    </Styled.Modal>
  );
};

export default AddModal;
