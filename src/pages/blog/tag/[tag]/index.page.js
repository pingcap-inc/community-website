import React from 'react';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import * as Styled from './index.styled';

import { CommunityHead } from '~/components';
import { PageDataContext } from '~/context';
import { link as linkUtils } from '~/utils';
import { getI18nProps } from '~/utils/i18n.utils';

import OrderBySwitch from '../../home/OrderBySwitch';
import BlogList from '../../home/BlogList';
import HotTagList from '../../home/HotTagList';
import TagItem from './TagItem.component';
import BlogLayout from '../../BlogLayout.component';
import { api } from '@tidb-community/datasource';

const getTageInfo = (tag) => {
  return {
    name: tag,
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  };
};

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-events'])(ctx);

  const blogs = await api.blog.getLatest();
  const tags = await api.blog.getTags();

  return {
    props: {
      ...i18nProps,
      blogs,
      tags,
    },
  };
};

const TagDetail = ({ blogs, tags }) => {
  const router = useRouter();
  const { tag } = router.query;

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
              <TagItem {...getTageInfo(tag)} />
            </Styled.Start>
            <Styled.Center>
              <OrderBySwitch />
              <BlogList blogs={blogs} />
            </Styled.Center>
            <Styled.End>
              <Button icon={<EditOutlined />} onClick={handleClickWrite} type="primary" block>
                写博客
              </Button>
              <HotTagList hotTags={tags} />
            </Styled.End>
          </Styled.Container>
        </Styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
};

export default TagDetail;
