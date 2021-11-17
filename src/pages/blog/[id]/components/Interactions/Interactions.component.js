import React from 'react';
import * as Styled from './interactions.styled';
import { CommentOutlined, HeartOutlined, ShareAltOutlined, StarOutlined } from '@ant-design/icons';

const Interactions = ({ blogInfo }) => {
  return (
    <>
      <Interaction icon={CommentOutlined} count={blogInfo.comments} />
      <Interaction icon={HeartOutlined} count={blogInfo.likes} />
      <Interaction icon={StarOutlined} count={blogInfo.favorites} />
      <Interaction icon={ShareAltOutlined} count={blogInfo.shares} />
    </>
  );
};

const Interaction = ({ icon: Icon, count }) => {
  return (
    <Styled.Interaction>
      <Icon />

      <span className="count">{count}</span>
    </Styled.Interaction>
  );
};

export default Interactions;
