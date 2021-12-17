import React from 'react';
import Link from 'next/link';

import * as Styled from './TagItem.styled';

const TagItem = ({ name, slug, posts }) => {
  const url = `/blog/tag/${slug}`;
  return (
    <Styled.Card title="" bordered={false}>
      <Styled.Title>
        <Link href={url}>{`# ${name}`}</Link>
      </Styled.Title>
      <Styled.Footer>{posts ?? 0} 篇文章</Styled.Footer>
    </Styled.Card>
  );
};

export default TagItem;
