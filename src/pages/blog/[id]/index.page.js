import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Breadcrumb, Skeleton } from 'antd';
import * as Styled from './blog.styled';
import { CoreLayout } from '~/layouts';
import { OriginLabel, RepostLabel } from './components/labels';
import { BlogInfo } from '@tidb-community/ui';
import TiEditor, { createFactory } from '@pingcap-inc/tidb-community-editor';
import '@pingcap-inc/tidb-community-editor/dist/style.css';
import AuthorInfo from './components/AuthorInfo';
import Interactions from './components/Interactions';
import Comments from './components/Comments';
import StatusAlert from './components/StatusAlert';

const noop = () => {};

const BlogPage = () => {
  const router = useRouter();
  const { isReady, query } = router;

  const { data: blogInfo, mutate: reload } = useSWR([isReady && 'blog.posts.post.info', query.id]);
  const isLoading = !blogInfo;

  const factory = useMemo(() => createFactory(), []);

  const fragment = useMemo(() => {
    return JSON.parse(blogInfo?.content || '[]');
  }, [blogInfo]);

  if (isLoading) return <Skeleton active />;

  return (
    <CoreLayout MainWrapper={Styled.MainWrapper}>
      <Styled.VisualContainer>
        <Breadcrumb>
          <Breadcrumb.Item href="/blog">博客</Breadcrumb.Item>
          <Breadcrumb.Item>{blogInfo.category?.name}</Breadcrumb.Item>
        </Breadcrumb>
        <StatusAlert blogInfo={blogInfo} />
        <Styled.Content>
          <Styled.Side>
            <Interactions blogInfo={blogInfo} reload={reload} />
          </Styled.Side>

          <Styled.Title>{blogInfo.title}</Styled.Title>

          <Styled.Meta>
            <AuthorInfo blogInfo={blogInfo} />
          </Styled.Meta>

          <Styled.Meta>
            {blogInfo.origin !== 'ORIGIN' ? <RepostLabel>转载</RepostLabel> : <OriginLabel>原创</OriginLabel>}

            {blogInfo.tags.map((tag) => (
              <BlogInfo.Tag key={tag.slug}>{tag.name}</BlogInfo.Tag>
            ))}
          </Styled.Meta>

          <Styled.Editor>
            <Content fragment={fragment} factory={factory} />
          </Styled.Editor>
        </Styled.Content>

        {blogInfo.origin !== 'ORIGIN' ? (
          <Styled.Declaration>声明：本文转载于 {blogInfo.sourceURL}</Styled.Declaration>
        ) : undefined}

        <Comments blogInfo={blogInfo} />
      </Styled.VisualContainer>
    </CoreLayout>
  );
};

const Content = ({ factory, fragment }) => {
  const html = useMemo(() => {
    if (!process.browser) {
      return factory.generateHtml(fragment);
    }
  }, [factory, fragment]);

  if (process.browser) {
    return <TiEditor value={fragment} onChange={noop} factory={factory} disabled />;
  } else {
    return <article dangerouslySetInnerHTML={{ __html: html }} />;
  }
};

export default BlogPage;
