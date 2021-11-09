import React from 'react';
import * as Styled from './index.styled';
import Link from 'next/link';
import { Card } from 'antd';

const HotTagList = ({ hotTags }) => {
  return (
    <Styled.Container>
      <Card title="热门标签" extra={<Link href="/blog/tag">查看全部</Link>}>
        <Styled.List>
          {hotTags.map((item) => (
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
