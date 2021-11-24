import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Pagination } from 'antd';

import * as Styled from './index.styled';

import { api } from '@tidb-community/datasource';

import { getI18nProps } from '~/utils/i18n.utils';
import { CommunityHead } from '~/components';
import { PageDataContext } from '~/context';

import TagItem from './TagItem.component';
import BlogLayout from '../BlogLayout.component';
import { getPageQuery, useRouterPage } from '~/utils/pagination.utils';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-events'])(ctx);

  const { page, size } = getPageQuery(ctx.query);

  const tags = await api.blog.getTags({ page, size });

  return {
    props: {
      ...i18nProps,
      tags,
    },
  };
};

const TagPage = ({
  tags: {
    content,
    page: { number, totalElements },
  },
}) => {
  const { onPageChange } = useRouterPage();

  return (
    <PageDataContext.Provider value={{}}>
      <CommunityHead
        title="博客 - 全部标签"
        // description
        // keyword
      />

      <BlogLayout>
        <Styled.Content>
          <Styled.Breadcrumb>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link href={'/blog'}>博客</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link href={'/blog/tag'}>标签</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Styled.Breadcrumb>
          <Styled.List>
            {content.map((item, key) => (
              <Styled.Item key={key}>
                <TagItem {...item} />
              </Styled.Item>
            ))}
          </Styled.List>
          <Styled.Pagination>
            <Pagination current={number} total={totalElements} onChange={onPageChange} />
          </Styled.Pagination>
        </Styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
};

export default TagPage;
