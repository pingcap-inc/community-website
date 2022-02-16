import React from 'react';
import * as Styled from './index.styled';
// import BlogInfo from '../blogInfo';
import PostItem from '~/pages/blog/user/_component/PostItem';
import { List, Skeleton, Tag } from 'antd';
import { useRouterPage } from '~/utils/pagination.utils';

const StatusBadge = ({ status }) => {
  let color = '';
  let text = '';
  switch (status) {
    case 'PUBLISHED': {
      color = '#F8C200';
      text = '已发布';
      break;
    }
    case 'DRAFT': {
      color = '#D8D8D8';
      text = '草稿';
      break;
    }
    case 'PENDING': {
      color = '#7D3F98';
      text = '';
      break;
    }
    case 'REJECTED': {
      color = '#FF6D78';
      text = '审核未通过';
      break;
    }
    default: {
      color = '#FFF';
    }
  }
  return <Tag color={color}>{text}</Tag>;
};

const BlogList = ({
  blogs: {
    content,
    page: { number, totalElements },
  },
  // usernameExtends,
  // bottomExtends,
  // emptyText = '暂无文章',
  // getPostUrl,
  actionText,
  showStatusBadge = false,
}) => {
  const { onPageChange } = useRouterPage();
  if (!content) {
    return <Skeleton active />;
  }

  return (
    <Styled.Container>
      <Styled.List>
        <List
          pagination={{ current: number, total: totalElements, onChange: onPageChange }}
          dataSource={content}
          // locale={{ emptyText }}
          renderItem={(value) => {
            return (
              <Styled.Item key={value.id}>
                {/*<BlogInfo*/}
                {/*  {...value}*/}
                {/*  getPostUrl={getPostUrl}*/}
                {/*  usernameExtends={usernameExtends}*/}
                {/*  bottomExtends={bottomExtends}*/}
                {/*  actionText={actionText}*/}
                {/*/>*/}
                <PostItem
                  actionText={actionText}
                  blogInfo={value}
                  statusBadge={showStatusBadge ? <StatusBadge status={value.status} /> : undefined}
                />
              </Styled.Item>
            );
          }}
        />
      </Styled.List>
    </Styled.Container>
  );
};

export default BlogList;
