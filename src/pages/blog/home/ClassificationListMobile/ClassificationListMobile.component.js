import React from 'react';
import * as Styled from './index.styled';
import Link from 'next/link';

const ClassificationListMobile = ({classifications}) => {
  return (
    <Styled.Container>
      <Styled.List>
        {classifications.map((item) => (
          <Item data={item} />
        ))}
      </Styled.List>
    </Styled.Container>
  );
};

const Item = ({ data: { name, url, selected } }) => {
  return (
    <Link href={`/${url}`}>
      <Styled.Item selected={!!selected}>{name}</Styled.Item>
    </Link>
  );
};

export default ClassificationListMobile;
