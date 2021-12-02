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

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { slug } = ctx.params;

  const tag = await api.blog.getTagBySlug(slug);

  const [blogs, hotTags] = await Promise.all([api.blog.getRecommend({ tagID: tag.id }), api.blog.getHotTags()]);

  return {
    props: {
      ...i18nProps,
      blogs,
      hotTags,
      tag,
      slug,
    },
  };
};

const TagDetail = ({ blogs, hotTags, tag, slug }) => {
  const orderBy = [
    { name: '推荐排序', url: `/blog/tag/${slug}` },
    { name: '时间排序', url: `/blog/tag/${slug}/latest` },
  ];

  return (
    <PageDataContext.Provider value={{}}>
      <CommunityHead
        title={`专栏 - ${tag.name}`}
        // description
        // keyword
      />

      <BlogLayout>
        <Styled.Content>
          <Styled.Breadcrumb>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link href={'/blog'}>专栏</Link>
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
