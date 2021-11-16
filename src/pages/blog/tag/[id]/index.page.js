import React from 'react';
import * as Styled from './index.styled';

import { api } from '@tidb-community/datasource';

import { CommunityHead } from '~/components';
import { PageDataContext } from '~/context';
import { getI18nProps } from '~/utils/i18n.utils';

import OrderBySwitch from '../../home/OrderBySwitch';
import BlogList from '../../BlogList';
import HotTagList from '../../HotTagList';
import TagItem from './TagItem.component';
import BlogLayout from '../../BlogLayout.component';
import WriteBlogButton from '../../WriteBlogButton';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-events'])(ctx);

  const { id } = ctx.params;

  const blogs = await api.blog.getLatest();
  const hotTags = await api.blog.getHotTags();
  const tag = await api.blog.getTagById(id);

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
  return (
    <PageDataContext.Provider value={{}}>
      <CommunityHead
        title="博客"
        // description
        // keyword
      />

      <BlogLayout>
        <Styled.Content>
          <Styled.Container>
            <Styled.Start>
              <TagItem {...tag} />
            </Styled.Start>
            <Styled.Center>
              <OrderBySwitch />
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
