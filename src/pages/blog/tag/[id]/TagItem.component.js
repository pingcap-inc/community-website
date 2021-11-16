import React from 'react';
import * as Styled from './TagItem.styled';
import { Card } from 'antd';

const TagItem = ({ name, weight, description }) => {
  return (
    <Card title="">
      <Styled.Title># {name}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Footer>{weight} 篇文章</Styled.Footer>
    </Card>
  );
};

export default TagItem;
