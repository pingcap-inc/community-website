import React from 'react';
import * as Styled from './TagItem.styled';
import { Card } from 'antd';

const TagItem = ({ data: { name, articleNum, description } }) => {
  return (
    <Card title="">
      <Styled.Title># {name}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Footer>{articleNum} 篇文章</Styled.Footer>
    </Card>
  );
};

export default TagItem;
