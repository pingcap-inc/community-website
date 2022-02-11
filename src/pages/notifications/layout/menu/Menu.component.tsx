import React, { useEffect } from 'react';

import * as Styled from './menu.styled';

export enum AsktugNotificationType {
  replied = 2,
  edited = 4,
  liked = 5,
  liked_grouped = 19,
}

export enum BlogNotificationType {
  POST = 'POST',
  COMMENT = 'COMMENT',
  LIKE = 'LIKE',
  FAVORITE = 'FAVORITE',
}

export enum SubPage {
  ASKTUG_NOTIFICATION = 'from=asktug',
  ASKTUG_NOTIFICATION_REPLIED = 'from=asktug&type=2',
  ASKTUG_NOTIFICATION_LIKED = 'from=asktug&type=5,19',
  ASKTUG_NOTIFICATION_EDIT = 'from=asktug&type=4',
  BLOG_NOTIFICATION = 'from=blog',
  BLOG_NOTIFICATION_COMMENT = 'from=blog&type=COMMENT',
  BLOG_NOTIFICATION_LIKE = 'from=blog&type=LIKE',
  BLOG_NOTIFICATION_FAVORITE = 'from=blog&type=FAVORITE',
}

export interface AsktugFilter {
  from: 'asktug';
  type?: AsktugNotificationType | AsktugNotificationType[];
}

export interface BlogFilter {
  from: 'blog';
  type?: BlogNotificationType;
}

export type Filter = AsktugFilter | BlogFilter;

const filterKey = (filter: Filter) => `${filter.from}|${filter.type}`;

export interface MenuProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

const Menu = ({ filter, onFilterChange }: MenuProps) => {
  useEffect(() => {
    if (!filter) {
      click(list[0].filter)();
    }
  }, [filter]);

  useEffect(() => {
    if (!filter) {
      onFilterChange(list[0].filter);
    }
  }, [filter, onFilterChange]);

  const click = (filter: Filter) => {
    return () => {
      onFilterChange(filter);
    };
  };

  return (
    <Styled.Container>
      {list.map((item) => (
        <Styled.Item
          key={filterKey(item.filter)}
          indent={item.indent}
          isActive={filter === item.filter}
          onClick={click(item.filter)}
        >
          {item.title}
        </Styled.Item>
      ))}
    </Styled.Container>
  );
};

interface MenuItemProps {
  filter: Filter;
  title: string;
  indent: boolean;
}

const list: MenuItemProps[] = [
  {
    filter: {
      from: 'asktug',
      type: undefined,
    },
    title: '论坛消息',
    indent: false,
  },
  {
    filter: {
      from: 'asktug',
      type: AsktugNotificationType.replied,
    },
    title: '回复我的',
    indent: true,
  },
  {
    filter: {
      from: 'asktug',
      type: [AsktugNotificationType.liked, AsktugNotificationType.liked_grouped],
    },
    title: '获得赞',
    indent: true,
  },
  {
    filter: {
      from: 'asktug',
      type: AsktugNotificationType.edited,
    },
    title: '编辑',
    indent: true,
  },
  {
    filter: {
      from: 'blog',
    },
    title: '专栏消息',
    indent: false,
  },
  {
    filter: {
      from: 'blog',
      type: BlogNotificationType.COMMENT,
    },
    title: '评论我的',
    indent: true,
  },
  {
    filter: {
      from: 'blog',
      type: BlogNotificationType.LIKE,
    },
    title: '获得赞',
    indent: true,
  },
  {
    filter: {
      from: 'blog',
      type: BlogNotificationType.FAVORITE,
    },
    title: '收藏我的',
    indent: true,
  },
];

export default Menu;
