import * as React from 'react';

import * as styled from './index.styled';

import BlogLayout from '../../BlogLayout.component';
import CategoryList from '../CategoryList';
import CategoryListMobile from '../CategoryListMobile';
import OrderBySwitch from '../OrderBySwitch';
import { BlogListInfiniteScroll } from '../../BlogList';
import HotTagList from '../../HotTagList';
import WriteBlogButton from '../../WriteBlogButton';

const orderBy = [
  { name: '推荐排序', url: '/blog' },
  { name: '时间排序', url: '/blog/latest' },
];

export default function BlogHomepage({ categories, blogs, hotTags, blogApi }) {
  const categoriesWithAll = { ...categories };
  const contentWithAll = [...categories.content];
  categoriesWithAll.content = contentWithAll;
  contentWithAll.unshift({ name: '全部文章', slug: '' });
  return (
    <BlogLayout>
      <styled.Content>
        <styled.Container>
          <styled.Start>
            <CategoryList categories={categoriesWithAll} />
          </styled.Start>
          <styled.Center>
            <CategoryListMobile categories={categoriesWithAll} />
            {/*<SearchOnMobile />*/}
            <OrderBySwitch items={orderBy} />
            <BlogListInfiniteScroll blogs={blogs} api={blogApi} />
          </styled.Center>
          <styled.End>
            <styled.WriteBlog>
              <WriteBlogButton />
            </styled.WriteBlog>
            <HotTagList hotTags={hotTags} />
          </styled.End>
        </styled.Container>
      </styled.Content>
    </BlogLayout>
  );
}
