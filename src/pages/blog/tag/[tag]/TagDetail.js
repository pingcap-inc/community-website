import React from 'react';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import * as Styled from './index.styled';
import OrderBySwitch from '../../home/OrderBySwitch';
import BlogList from '../../home/BlogList';
import HotTagList from '../../home/HotTagList';
import { link as linkUtils } from '~/utils';
import TagItem from '../TagItem.component';

const tagItemProps = {
  name: 'tiflash',
  articleNum: 104,
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
};

const TagDetail = () => {
  const router = useRouter();
  const handleClickWrite = (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, '/blog');
  };
  return (
    <Styled.Container>
      <Styled.Start>
        <TagItem {...tagItemProps} />
      </Styled.Start>
      <Styled.Center>
        <OrderBySwitch />
        <BlogList />
      </Styled.Center>
      <Styled.End>
        <Button icon={<EditOutlined />} onClick={handleClickWrite} type="primary" block>
          写博客
        </Button>
        <HotTagList />
      </Styled.End>
    </Styled.Container>
  );
};

export default TagDetail;
