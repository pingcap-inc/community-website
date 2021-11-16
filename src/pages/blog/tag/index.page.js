import React from 'react';
import * as Styled from './index.styled';
import { Pagination } from 'antd';

import { getI18nProps } from '~/utils/i18n.utils';
import { CommunityHead } from '~/components';
import { PageDataContext } from '~/context';

import TagItem from './TagItem.component';
import BlogLayout from '../BlogLayout.component';
import { api } from '@tidb-community/datasource';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-events'])(ctx);

  const tags = await api.blog.getTags();

  return {
    props: {
      ...i18nProps,
      tags,
    },
  };
};

const TagPage = ({ tags: { content } }) => {
  return (
    <PageDataContext.Provider value={{}}>
      <CommunityHead
        title="博客 - 全部标签"
        // description
        // keyword
      />

      <BlogLayout>
        <Styled.Content>
          <Styled.List>
            {content.map((item, key) => (
              <Styled.Item key={key}>
                <TagItem {...item} />
              </Styled.Item>
            ))}
          </Styled.List>
          <Styled.Pagination>
            <Pagination defaultCurrent={1} total={50} />
          </Styled.Pagination>
        </Styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
};

export default TagPage;
