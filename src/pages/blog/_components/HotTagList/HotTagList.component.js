import React from 'react';
import Link from 'next/link';

import * as Styled from './index.styled';

const HotTagList = ({ hotTags: { content }, shallow = false, current }) => {
  return (
    <Styled.Container>
      <Styled.Card title="热门标签" extra={<Link href="/blog/tag">查看全部</Link>}>
        <Styled.List>
          {content.map((item) => (
            <Item {...item} key={item.id} shallow={shallow} current={current} active={current === item.slug} />
          ))}
        </Styled.List>
      </Styled.Card>
    </Styled.Container>
  );
};

const Item = ({ name, slug, shallow, active }) => {
  const url = `/blog/tag/${slug}`;
  return (
    <Link href={url} passHref shallow={shallow}>
      <Styled.Item selected={active}># {name}</Styled.Item>
    </Link>
  );
};

export default HotTagList;
