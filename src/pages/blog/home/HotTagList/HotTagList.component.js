import React from 'react';
import * as Styled from './index.styled';
import Link from 'next/link';
import { Card } from 'antd';

const HotTagList = ({ hotTags: { content } }) => {
  return (
    <Styled.Container>
      <Card title="热门标签" extra={<Link href="/blog/tag">查看全部</Link>}>
        <Styled.List>
          {content.map((item) => (
            <Item data={item} />
          ))}
        </Styled.List>
      </Card>
    </Styled.Container>
  );
};

const Item = ({ data: { name, selected } }) => {
  const url = `/blog/tags/${name}`;
  return (
    <Link href={url}>
      <Styled.Item selected={!!selected}># {name}</Styled.Item>
    </Link>
  );
};

export default HotTagList;
