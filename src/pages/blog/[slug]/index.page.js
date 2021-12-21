import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Breadcrumb, Skeleton } from 'antd';
import * as Styled from './blog.styled';
import { CoreLayout } from '~/layouts';
import { OriginLabel, RepostLabel } from './components/labels';
import BlogInfo from '../components/blogInfo';
import TiEditor, { createFactory } from '@pingcap-inc/tidb-community-editor';
import '@pingcap-inc/tidb-community-editor/dist/style.css';
import AuthorInfo from './components/AuthorInfo';
import Interactions from './components/Interactions';
import Comments from './components/Comments';
import StatusAlert from './components/StatusAlert';
import { api } from '@tidb-community/datasource';
import { getI18nProps } from '~/utils/i18n.utils';
import { CommunityHead } from '~/components';
import { usePrincipal } from '../blog.hooks';
import ErrorPage from '../../../components/errorPage';

const noop = () => {};

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { slug } = ctx.params;

  const blogInfo = await api.blog.getPostBySlug(slug);

  return {
    props: {
      ...i18nProps,
      blogInfo,
    },
  };
};

const BlogPage = ({ blogInfo: ssrBlogInfo }) => {
  const router = useRouter();
  const { isReady, query } = router;
  const { slug } = query;

  const { data: blogInfo, mutate: reload } = useSWR([isReady && 'blog.getPostBySlug', slug], {
    initialData: ssrBlogInfo,
    revalidateOnMount: true,
  });
  const isLoading = !blogInfo;

  const factory = useMemo(() => createFactory(), []);

  const fragment = useMemo(() => {
    return JSON.parse(blogInfo?.content || '[]');
  }, [blogInfo]);

  const { id } = usePrincipal();

  if (isLoading) return <Skeleton active />;

  if (blogInfo.status === 'PENDING') return <ErrorPage statusCode={403} errorMsg="该文章正在审核中" />;

  let BreadcrumbDOM;
  switch (blogInfo.status) {
    case 'DRAFT': {
      BreadcrumbDOM = (
        <>
          <Breadcrumb.Item href={`/blog/user/${id}/posts`}>我的专栏</Breadcrumb.Item>
          <Breadcrumb.Item href={`/blog/user/${id}/posts`}>草稿</Breadcrumb.Item>
        </>
      );
      break;
    }
    default: {
      BreadcrumbDOM = (
        <Breadcrumb.Item href={`/blog/c/${blogInfo.category?.slug}`}>{blogInfo.category?.name}</Breadcrumb.Item>
      );
    }
  }

  return (
    <CoreLayout MainWrapper={Styled.MainWrapper}>
      <CommunityHead
        title={`专栏 - ${blogInfo.title}`}
        // description
        // keyword
      />

      {/*<Styled.VisualContainer>*/}
      <Styled.Content>
        <Styled.Side>
          <Interactions blogInfo={blogInfo} reload={reload} />
        </Styled.Side>
        <Styled.Main>
          <Styled.Breadcrumb>
            <Breadcrumb.Item href="/blog">专栏</Breadcrumb.Item>
            {BreadcrumbDOM}
          </Styled.Breadcrumb>
          <Styled.StatusAlert>
            <StatusAlert blogInfo={blogInfo} />
          </Styled.StatusAlert>

          <Styled.Body>
            {blogInfo.coverImageURL ? (
              <Styled.CoverImage style={{ backgroundImage: `url(${JSON.stringify(blogInfo.coverImageURL)})` }} />
            ) : undefined}

            <Styled.Title>{blogInfo.title}</Styled.Title>

            <Styled.Meta>
              <AuthorInfo blogInfo={blogInfo} />
            </Styled.Meta>

            <Styled.Meta>
              {blogInfo.origin !== 'ORIGINAL' ? <RepostLabel>转载</RepostLabel> : <OriginLabel>原创</OriginLabel>}

              {blogInfo.tags.map((tag) => (
                <BlogInfo.Tag key={tag.slug} onClick={() => router.push(`/blog/tag/${tag.slug}`)}>
                  {tag.name}
                </BlogInfo.Tag>
              ))}
            </Styled.Meta>

            <Styled.Editor>
              <Content fragment={fragment} factory={factory} />
            </Styled.Editor>

            <Styled.BottomActions>
              <Interactions blogInfo={blogInfo} reload={reload} />
            </Styled.BottomActions>
          </Styled.Body>

          {blogInfo.origin !== 'ORIGINAL' ? (
            <Styled.Declaration>声明：本文转载于 {blogInfo.sourceURL}</Styled.Declaration>
          ) : undefined}

          {blogInfo.status === 'PUBLISHED' ? <Comments blogInfo={blogInfo} /> : undefined}
        </Styled.Main>
      </Styled.Content>
      {/*</Styled.VisualContainer>*/}
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
