import React from 'react';
import * as Styled from './index.styled';

import { api } from '@tidb-community/datasource';

import { CommunityHead } from '~/components';
import { PageDataContext } from '~/context';
import { getI18nProps } from '~/utils/i18n.utils';

import OrderBySwitch from '../../home/OrderBySwitch';
import BlogList from '../../BlogList';
import HotTagList from '../../HotTagList';
import TagItem from '../TagItem.component';
import BlogLayout from '../../BlogLayout.component';
import WriteBlogButton from '../../WriteBlogButton';
import { Breadcrumb } from 'antd';
import Link from 'next/link';

const orderBy = [
  { name: '推荐排序', url: '/blog' },
  { name: '时间排序', url: '/blog/latest' },
];

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { slug } = ctx.params;

  const blogs = await api.blog.getLatest();
  const hotTags = await api.blog.getHotTags();
  const tag = await api.blog.getTagBySlug(slug);

  return {
    props: {
      ...i18nProps,
      blogs,
      hotTags,
      tag,
    },
  };
};

const TagDetail = ({ blogs, hotTags, tag }) => {
  console.log('tag', tag);
  return (
    <PageDataContext.Provider value={{}}>
      <CommunityHead
        title="博客"
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
              <Breadcrumb.Item>{tag.name}</Breadcrumb.Item>
            </Breadcrumb>
          </Styled.Breadcrumb>
          <Styled.Container>
            <Styled.Start>
              <TagItem {...tag} />
            </Styled.Start>
            <Styled.Center>
              <OrderBySwitch items={orderBy} />
              <BlogList blogs={blogs} />
            </Styled.Center>
            <Styled.End>
              <WriteBlogButton />
              <HotTagList hotTags={hotTags} />
            </Styled.End>
          </Styled.Container>
        </Styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
};

export default TagDetail;
