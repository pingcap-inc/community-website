import * as React from 'react';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import * as Styled from '@tidb-community/ui';
import { api } from '@tidb-community/datasource';

import { getI18nProps } from '~/utils/i18n.utils';
import { CommunityHead } from '~/components';
import { PageDataContext } from '~/context';
import { link as linkUtils } from '~/utils';

import BlogLayout from './BlogLayout.component';
import ClassificationList from './home/ClassificationList';
import ClassificationListMobile from './home/ClassificationListMobile';
import SearchOnMobile from './home/SearchOnMobile';
import OrderBySwitch from './home/OrderBySwitch';
import BlogList from './home/BlogList';
import HotTagList from './home/HotTagList';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-events'])(ctx);

  const tags = await api.blog.getLatest();
  const categories = await api.blog.getCategories();

  return {
    props: {
      ...i18nProps,
      categories,
      tags,
    },
  };
};

export default function BlogHomepage({ categories, tags }) {
  const router = useRouter();
  const handleClickWrite = (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, '/blog');
  };
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
              <ClassificationList categories={categories} />
            </Styled.Start>
            <Styled.Center>
              <ClassificationListMobile categories={categories} />
              <SearchOnMobile />
              <OrderBySwitch />
              <BlogList />
            </Styled.Center>
            <Styled.End>
              <Styled.WriteBlog>
                <Button icon={<EditOutlined />} onClick={handleClickWrite} type="primary" block>
                  写博客
                </Button>
              </Styled.WriteBlog>
              <HotTagList hotTags={tags} />
            </Styled.End>
          </Styled.Container>
        </Styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
}
