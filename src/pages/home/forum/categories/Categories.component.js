import React from 'react';

import * as Styled from './categories.styled';

const Categories = ({ categories }) => (
  <Styled.Container>
    {categories.map(({ name, link }) => (
      <Styled.Tag key={name} href={link}>
        {name}
      </Styled.Tag>
    ))}
  </Styled.Container>
);

export default Categories;
