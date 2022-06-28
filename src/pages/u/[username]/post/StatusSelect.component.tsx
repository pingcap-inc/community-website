import React from 'react';
import { Select } from 'antd';
import { useRouter } from 'next/router';

interface IStatusInfo {
  label: string;
  value: string;
  url: string;
}

const statuses: IStatusInfo[] = [
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

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  shallow?: boolean;
  value: IStatusInfo['url'];
}

export default function StatusSelect({ shallow, ...props }: IProps): JSX.Element {
  const router = useRouter();
  const { username } = router.query;
  const onChangeFilter = async (value, option) => {
    const { url } = option;
    const newUrl = `/u/${encodeURIComponent(username as string)}/post/${url}`;
    await router.push(newUrl, newUrl, { shallow: shallow ?? false });
  };
  //@ts-ignore
  return <Select style={{ width: '8rem' }} options={statuses} onChange={onChangeFilter} {...props} />;
}
