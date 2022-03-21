import React, { useContext } from 'react';
import { Button } from 'antd';
import { EditFilled } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';

import * as Styled from './blogs.styled';
import Blog from './blog';
import Categories from '~/pages/home/forum/categories';
import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { Link } from '~/components';
import { PageDataContext } from '~/context';
import { useIsSmallScreen } from '~/hooks';

const Blogs = () => {
  const { data } = useContext(PageDataContext);
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-home', 'common');

  const lang = t('blogs', { returnObjects: true });

  const writeBlogButtonProps = {
    type: 'primary',
    size: 'large',
    icon: <EditFilled />,
    children: lang.writeBlog,
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
                  ...blog,
                };

                return <Blog {...props} />;
              })}
            </Styled.Blogs>
            <Link href={{ pathname: '/blog', query: { latest: true } }}>{t('common:viewAll')}</Link>
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
                <Link href={'/blog/new/edit'}>
                  <Button {...writeBlogButtonProps} />
                </Link>
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
