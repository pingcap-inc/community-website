import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Card } from 'antd';

import * as Styled from './index.styled';

const HotTagList = ({ hotTags: { content } }) => {
  return (
    <Styled.Container>
      <Card title="热门标签" extra={<Link href="/blog/tag">查看全部</Link>}>
        <Styled.List>
          {content.map((item) => (
            <Item {...item} />
          ))}
        </Styled.List>
      </Card>
    </Styled.Container>
  );
};

const Item = ({ name, slug }) => {
  const { asPath } = useRouter();
  const url = `/blog/tag/${slug}`;
  const selected = asPath === url;
  return (
    <Link href={url}>
      <Styled.Item selected={!!selected}># {name}</Styled.Item>
    </Link>
  );
};

export default HotTagList;
