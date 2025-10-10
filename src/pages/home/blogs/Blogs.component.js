import React, { useContext } from 'react';
import { Button } from 'antd';
import { EditFilled } from '@ant-design/icons';

import Categories from '~/pages/home/forum/categories';
import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { Link } from '~/components';
import { PageDataContext } from '~/context';
import { useIsSmallScreen } from '~/hooks';

import * as Styled from './blogs.styled';
import Blog from './blog';

const categories = [
  {
    name: '实践案例',
    link: '/blog/tag/practical-case',
  },
  {
    name: 'TiDB 底层架构',
    link: '/blog/tag/tidb-underlying-architecture',
  },
  {
    name: '故障排查/诊断',
    link: '/blog/tag/troubleshooting-and-diagnosis',
  },
  {
    name: '管理与运维',
    link: '/blog/tag/management-and-operation-and-maintenance',
  },
  {
    name: '性能调优',
    link: '/blog/tag/performance-tuning',
  },
  {
    name: '安装 & 部署',
    link: '/blog/tag/install-and-deploy',
  },
  {
    name: '数据库架构选型',
    link: '/blog/tag/database-architecture-selection',
  },
  {
    name: '监控',
    link: '/blog/tag/monitor',
  },
  {
    name: '版本测评',
    link: '/blog/tag/version-evaluation',
  },
  {
    name: '新版本/特性发布',
    link: '/blog/tag/new-version-features-released',
  },
];

const Blogs = () => {
  const { data } = useContext(PageDataContext);
  const { isSmallScreen } = useIsSmallScreen();

  const writeBlogButtonProps = {
    type: 'primary',
    size: 'large',
    icon: <EditFilled />,
    children: '写博客',
  };

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <TwoColumnsSection
        title={'博客文章'}
        reverseOnSmallScreen
        leftPanel={
          <>
            <Styled.Blogs>
              {data.blogs.map((blog, idx) => {
                const props = {
                  key: idx,
                  ...blog,
                };

                return <Blog {...props} />;
              })}
            </Styled.Blogs>
            <Link href={{ pathname: '/blog', query: { latest: true } }}>查看全部</Link>
          </>
        }
        rightPanel={
          <>
            <Styled.Module>
              <Styled.ModuleTitle justify={isSmallScreen && 'center'}>想分享经验？</Styled.ModuleTitle>
              <p>「博客」是社区的技术文章集合地，用户可以在这里查看、分享高质量的博客文章，学习干货。</p>
              <p>
                发表、分享技术文章请参考
                <Link href={'/blog/66c5e81b'}>技术文章撰写&发布指引</Link>
              </p>
              <Styled.CenterOnSmallScreen isSmallScreen={isSmallScreen}>
                <Link href={'/blog/new/edit'}>
                  <Button {...writeBlogButtonProps} />
                </Link>
              </Styled.CenterOnSmallScreen>
            </Styled.Module>
            <Styled.Module>
              <Styled.ModuleTitle>
                热门标签
                <Link href={'/blog'}>查看全部</Link>
              </Styled.ModuleTitle>
              <Categories categories={categories} />
            </Styled.Module>
          </>
        }
      />
    </Styled.Container>
  );
};

export default Blogs;
