import * as React from 'react';

import { Tag } from 'antd';
import { TPostStatus } from '../../../../../packages/datasource/src/api/blog';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  status: TPostStatus;
}

const BlogStatusBadge = ({ status }: IProps) => {
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
      text = '审核中';
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

export default BlogStatusBadge;
