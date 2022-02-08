import React from 'react';
import * as Styled from './index.styled';
import { Input } from 'antd';

const SearchOnMobile = () => {
  const onSearch = () => {};
  return (
    <Styled.Container>
      <Input placeholder="请输入搜索关键字" allowClear onSearch={onSearch} style={{ width: '100%' }} />
    </Styled.Container>
  );
};

export default SearchOnMobile;
