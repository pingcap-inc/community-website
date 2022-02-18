import React from 'react';
import { Select } from 'antd';
import { useRouter } from 'next/router';

const statuses = [
  {
    label: '全部',
    value: '',
    url: 'all',
  },
  {
    label: '已发布',
    value: 'PUBLISHED',
    url: '',
  },
  {
    label: '草稿',
    value: 'DRAFT',
    url: 'draft',
  },
  {
    label: '审核中',
    value: 'PENDING',
    url: 'pending',
  },
  {
    label: '审核未通过',
    value: 'REJECTED',
    url: 'rejected',
  },
];

export type IProps = React.HTMLAttributes<HTMLDivElement>;

export default function StatusSelect(props: IProps): JSX.Element {
  const router = useRouter();
  const { id: userId } = router.query;
  const onChangeFilter = (value, option) => {
    const { url } = option;
    router.push(`/blog/user/${userId}/posts/${url}`);
  };
  return <Select style={{ width: '8rem' }} options={statuses} onChange={onChangeFilter} {...props} />;
}
