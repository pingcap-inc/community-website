import React, { useContext } from 'react';
import { Button } from 'antd';
import { EditFilled } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './blogs.styled';
import Blog from './blog';
import Categories from '~/pages/home/forum/categories';
import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { Link } from '~/components';
import { PageDataContext } from '~/context';
import { link as linkUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';

const Blogs = () => {
  const router = useRouter();
  const { data } = useContext(PageDataContext);
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-home', 'common');

  const lang = t('blogs', { returnObjects: true });

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  const writeBlogButtonProps = {
    type: 'primary',
    size: 'large',
    icon: <EditFilled />,
    children: lang.writeBlog,
    onClick: onClick('https://tidb.io/blog/new/edit'),
  };

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <TwoColumnsSection
        title={lang.title}
        reverseOnSmallScreen
        leftPanel={
          <>
            <Styled.Blogs>
              {data.blogs.map((blog, idx) => {
                const props = {
                  key: idx,
                  onClick,
                  ...blog,
                };

                return <Blog {...props} />;
              })}
            </Styled.Blogs>
            <Link href="/blog/latest" passHref>
              {t('common:viewAll')}
            </Link>
          </>
        }
        rightPanel={
          <>
            <Styled.Module>
              <Styled.ModuleTitle justify={isSmallScreen && 'center'}>{lang.shareExperience}</Styled.ModuleTitle>
              <p>{lang.intro}</p>
              <p>
                {lang.comply}
                <Link href={lang.doc.link}>{lang.doc.text}</Link>
              </p>
              <Styled.CenterOnSmallScreen isSmallScreen={isSmallScreen}>
                <Button {...writeBlogButtonProps} />
              </Styled.CenterOnSmallScreen>
            </Styled.Module>
            <Styled.Module>
              <Styled.ModuleTitle>
                {lang.articleCategories}
                <Link href="/blog">{t('common:viewAll')}</Link>
              </Styled.ModuleTitle>
              <Categories categories={lang.categories} />
            </Styled.Module>
          </>
        }
      />
    </Styled.Container>
  );
};

export default Blogs;
