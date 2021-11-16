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
import BlogList from '../../BlogList';
import HotTagList from '../../home/HotTagList';
import TagItem from './TagItem.component';
import BlogLayout from '../../BlogLayout.component';
import { api } from '@tidb-community/datasource';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-events'])(ctx);

  const { id } = ctx.params;

  const blogs = await api.blog.getLatest();
  const tags = await api.blog.getTags();
  const tag = await api.blog.getTagById(id);

  return {
    props: {
      ...i18nProps,
      blogs,
      tags,
      tag,
    },
  };
};

const TagDetail = ({ blogs, tags, tag }) => {
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
              <TagItem {...tag} />
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
