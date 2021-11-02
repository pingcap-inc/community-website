import React from 'react';
import * as Styled from './index.styled';
import Link from 'next/link';
import { Card } from 'antd';

const allClassifications = [
  { name: '全部分类', url: 'blog', selected: true },
  { name: '原理解读', url: 'blog' },
  { name: '新手区', url: 'blog' },
  { name: '性能调油', url: 'blog' },
  { name: '部署监控', url: 'blog' },
  { name: '新手区成长', url: 'blog' },
];

const HotTagList = ({}) => {
  return (
    <Styled.Container>
      <Card title="热门标签" extra={<a href="#">查看全部</a>} style={{ width: 300 }}>
        <Styled.List>
          {allClassifications.map((item) => (
            <Item data={item} />
          ))}
        </Styled.List>
      </Card>
    </Styled.Container>
  );
};

const Item = ({ data: { name, url, selected } }) => {
  return (
    <Link href={`/${url}`}>
      <Styled.Item selected={!!selected}># {name}</Styled.Item>
    </Link>
  );
};

export default HotTagList;
