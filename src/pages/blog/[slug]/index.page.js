import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Breadcrumb, Skeleton } from 'antd';
import NextHead from 'next/head';
import Link from 'next/link';

import * as Styled from './blog.styled';
import { CoreLayout } from '~/layouts';
import { OriginLabel, RepostLabel } from './components/labels';
import BlogInfo from '../_components/BlogInfo';
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
import { MeContext } from '~/context';
import Anchor from '~/components/Anchor';
import { throttle } from 'lodash';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);
  const { req } = ctx;
  const ip = req.headers['X-Forwarded-For'] || req.headers['x-real-ip'] || req.connection.remoteAddress;

  const { slug } = ctx.params;
  const { shareId } = ctx.query;

  let blog = null,
    isPending = false;
  try {
    blog = await api.blog.getPostBySlug({ slug, ip, shareId });
  } catch (e) {
    if (e.errCode === 'POST_NOT_FOUND') isPending = true;
  }

  return {
    props: {
      ...i18nProps,
      blog,
      isPending,
    },
  };
};

export const BlogPage = ({ blog: blogFromSSR, isPending }) => {
  const { isAuthor, hasAuthority } = usePrincipal();
  const { meData } = useContext(MeContext);

  const router = useRouter();
  const { isReady, query } = router;
  const { slug, shareId } = query;

  const {
    data: blog,
    mutate: reload,
    error: blogError,
  } = useSWR([isReady && 'blog.getPostBySlug', JSON.stringify({ slug, shareId, visit: true })], {
    fallbackData: blogFromSSR,
    revalidateOnMount: true,
    revalidateOnFocus: false,
  });
  const hasPermission = isAuthor(blog) || hasAuthority('REVIEW_POST');
  const error = blogError;
  // const loading = !blog || hasPermission === undefined;

  // { type: "paragraph", children: [{ "text": "" }]}
  const fragment = useMemo(() => JSON.parse(blog?.content ?? '[]'), [blog]);

  const factory = useMemo(() => createFactory(() => {}), []);

  useEffect(() => {
    factory.generateHeadingId(fragment, 6);
  }, [fragment, factory]);

  const onTotalCommentsChange = useCallback(
    (count) => {
      reload(
        (blog) => {
          if (blog) {
            blog.comments = count;
          }
          return blog;
        },
        { revalidate: false }
      );
    },
    [reload]
  );

  const BreadcrumbDOM = useMemo(() => {
    const BreadcrumbDOM = [<Breadcrumb.Item href="/blog">专栏</Breadcrumb.Item>];
    if (!blog) {
      return BreadcrumbDOM;
    }
    if (!meData) {
      BreadcrumbDOM.push(<Breadcrumb.Item>...</Breadcrumb.Item>);
    } else {
      switch (blog.status) {
        case 'DRAFT': {
          BreadcrumbDOM.push(<Breadcrumb.Item href={`/u/${meData.username}/post/draft`}>草稿</Breadcrumb.Item>);
          break;
        }
        case 'PENDING': {
          BreadcrumbDOM.push(<Breadcrumb.Item href={`/u/${meData.username}/post/pending`}>审核中</Breadcrumb.Item>);
          break;
        }
        case 'REJECTED': {
          BreadcrumbDOM.push(
            <Breadcrumb.Item href={`/u/${meData.username}/post/rejected`}>未审核通过</Breadcrumb.Item>
          );
          break;
        }
        default: {
          BreadcrumbDOM.push(
            <Breadcrumb.Item href={`/blog/c/${blog.category?.slug}`}>{blog.category?.name}</Breadcrumb.Item>
          );
        }
      }
    }
    return BreadcrumbDOM;
  }, [blog, meData]);

  const keyword = useMemo(() => {
    if (!blog) {
      return '';
    }
    return [blog.category?.name ?? '', ...(blog.tags ?? []).map((tag) => tag.name)];
  }, [blog]);

  const contents = useMemo(() => {
    return fragment
      .filter((value) => value.type === 'heading')
      .map((value) => ({
        level: value.depth,
        title: value.children?.reduce((title, value) => `${title}${value?.text}`, ''),
      }));
  }, [fragment]);

  useEffect(() => {
    const handler = throttle(() => {
      contents.forEach((value) => {
        const id = value.title;
        const contentsElement = document.getElementById(`contents-${id}`);
        if (contentsElement) {
          contentsElement.style.color = '#565656';
          contentsElement.style.borderLeftColor = '#E0E0E0';
        }
      });
      for (let i = contents.length - 1; i >= 0; --i) {
        const value = contents[i];
        const id = value.title;
        const element = document.getElementById(id);
        if (element) {
          const topDiff = element.getBoundingClientRect().top;
          if (topDiff < 84) {
            const contentsElement = document.getElementById(`contents-${id}`);
            if (contentsElement) {
              contentsElement.style.color = '#be1d32';
              contentsElement.style.borderLeftColor = '#be1d32';
            }
            return;
          }
        }
      }
    }, 250);
    window.document.addEventListener('scroll', handler);
    return () => window.document.removeEventListener('scroll', handler);
  }, [contents]);

  if (error) return <ErrorPage error={error} />;
  // if (loading) return <Skeleton active />;

  if (!blog) {
    return (
      <CoreLayout MainWrapper={Styled.MainWrapper}>
        <CommunityHead title={`专栏 - 加载中`} isArticle />
        <Skeleton active />
      </CoreLayout>
    );
  }

  if (isPending) {
    if (hasPermission) {
    } else {
      return <ErrorPage statusCode={403} errorMsg="该文章正在审核中" />;
    }
  }

  return (
    <CoreLayout MainWrapper={Styled.MainWrapper}>
      <CommunityHead title={`专栏 - ${blog.title}`} description={blog.summary} keyword={keyword} isArticle />

      <NextHead>
        <meta name="twitter:label1" content="By" />
        <meta name="twitter:data1" content={blog.author.username} />
        <meta name="twitter:label2" content="Likes" />
        <meta name="twitter:data2" content={`${blog.likes} ❤`} />
      </NextHead>

      {/*<Styled.VisualContainer>*/}
      <Styled.Content>
        <Styled.Side>
          <Interactions blog={blog} reload={reload} />
        </Styled.Side>
        <Styled.Main>
          <Styled.Breadcrumb>{BreadcrumbDOM}</Styled.Breadcrumb>
          <Styled.StatusAlert>
            <StatusAlert blog={blog} />
          </Styled.StatusAlert>

          <Styled.Body>
            {blog.coverImageURL ? (
              <Styled.CoverImage style={{ backgroundImage: `url(${JSON.stringify(blog.coverImageURL)})` }} />
            ) : undefined}

            <Styled.Title>{blog.title}</Styled.Title>

            <Styled.Meta>
              <AuthorInfo blog={blog} />
            </Styled.Meta>

            <Styled.Meta>
              {blog.origin !== 'ORIGINAL' ? <RepostLabel>转载</RepostLabel> : <OriginLabel>原创</OriginLabel>}

              {blog.tags.map((tag) => (
                <Link href={`/blog/tag/${tag.slug}`} passHref>
                  <BlogInfo.Tag key={tag.slug}>{tag.name}</BlogInfo.Tag>
                </Link>
              ))}
            </Styled.Meta>

            <Styled.Editor>
              <Content fragment={fragment} factory={factory} />
            </Styled.Editor>

            <Styled.BottomActions>
              <Interactions blog={blog} reload={reload} />
            </Styled.BottomActions>
          </Styled.Body>

          <Styled.Declaration>
            {blog.origin !== 'ORIGINAL' ? (
              <>声明：本文转载于 {blog.sourceURL}</>
            ) : (
              <>
                版权声明：本文为 TiDB 社区用户原创文章，遵循{' '}
                <Anchor href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</Anchor>{' '}
                版权协议，转载请附上原文出处链接和本声明。
              </>
            )}
          </Styled.Declaration>

          {blog.status === 'PUBLISHED' ? (
            <Comments blog={blog} onTotalCommentsChange={onTotalCommentsChange} />
          ) : undefined}
        </Styled.Main>

        <Styled.Contents>
          {contents.map((value, index) => (
            <Styled.ContentsItem
              key={index}
              $level={value.level}
              href={`#${value.title}`}
              id={`contents-${value.title}`}
            >
              {value.title}
            </Styled.ContentsItem>
            // <a key={index} href={`#${value.title}`}>
            //   {value.level} - {value.title}
            // </a>
          ))}
        </Styled.Contents>
      </Styled.Content>
      {/*</Styled.VisualContainer>*/}
    </CoreLayout>
  );
};

const Content = ({ factory, fragment, ...props }) => {
  const html = useMemo(() => {
    if (!process.browser) {
      return factory.generateHtml(fragment);
    }
  }, [factory, fragment]);

  if (process.browser) {
    return <TiEditor value={fragment} factory={factory} disabled {...props} />;
  } else {
    return <article dangerouslySetInnerHTML={{ __html: html }} />;
  }
};

export default BlogPage;
