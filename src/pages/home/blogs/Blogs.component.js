import React from 'react';
import { Button } from 'antd';
import { EditFilled } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './blogs.styled';
import * as mock from './blogs.mock';
import Blog from './blog';
import Categories from '~/pages/home/forum/categories';
import TwoColumnsLayout from '~/pages/home/twoColumsLayout';
import { Link } from '~/components';
import { link as linkUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';

const Blogs = () => {
  const router = useRouter();
  const { t } = useTranslation('page-home', 'common');
  const { isSmallScreen } = useIsSmallScreen();

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
    onClick: onClick('https://asktug.com/c/blog/'),
  };

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <TwoColumnsLayout
        title={lang.title}
        reverseOnSmallScreen
        leftPanel={
          <>
            <Styled.Blogs>
              {mock.blogs.map((blog, idx) => {
                const props = {
                  key: idx,
                  onClick,
                  ...blog,
                };

                return <Blog {...props} />;
              })}
            </Styled.Blogs>
            <Link href="https://asktug.com/c/blog/">{t('common:viewAll')}</Link>
          </>
        }
        rightPanel={
          <>
            <Styled.Module>
              <Styled.CenterableModuleTitle isSmallScreen={isSmallScreen}>
                {lang.shareExperience}
              </Styled.CenterableModuleTitle>
              <p>{lang.intro}</p>
              <p>
                {lang.comply}
                <Link href={lang.doc.link}>{lang.doc.text}</Link>
              </p>
              <Button {...writeBlogButtonProps} />
            </Styled.Module>
            <Styled.Module>
              <Styled.ModuleTitle>
                {lang.articleCategories}
                <Link href="https://asktug.com/c/blog/">{t('common:viewAll')}</Link>
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
