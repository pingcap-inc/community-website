import React, { useContext } from 'react';
import { Button } from 'antd';
import { EditFilled } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';

import * as Styled from './forum.styled';
import Categories from './categories';
import Post from './post';
import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { Link } from '~/components';
import { PageDataContext } from '~/context';
import { useIsSmallScreen } from '~/hooks';

const Forum = () => {
  const { data } = useContext(PageDataContext);
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-home', 'common');

  const lang = t('forum', { returnObjects: true });
  const viewAllLang = t('common:viewAll');

  const writePostButtonProps = {
    type: 'primary',
    size: 'large',
    icon: <EditFilled />,
    children: lang.writePost,
  };

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <TwoColumnsSection
        reverseOnSmallScreen
        title={lang.title}
        leftPanel={
          <>
            <Styled.Posts>
              {data.forumPosts.map((post, idx) => {
                const props = {
                  key: idx,
                  lang,
                  onClick,
                  ...post,
                  isSmallScreen,
                };

                return <Post {...props} />;
              })}
            </Styled.Posts>
            <Link href="https://asktug.com/">{viewAllLang}</Link>
          </>
        }
        rightPanel={
          <>
            <Styled.Module>
              <Styled.ModuleTitle justify={isSmallScreen && 'center'}>{lang.postQuestion}</Styled.ModuleTitle>
              <p>
                <Styled.AsktugLogo />
                {lang.intro}
              </p>
              <p>
                {lang.comply}
                <Link href={lang.doc.link}>{lang.doc.text}</Link>
              </p>
              <Styled.CenterOnSmallScreen isSmallScreen={isSmallScreen}>
                <a href="https://asktug.com/new-topic">
                  <Button {...writePostButtonProps} />
                </a>
              </Styled.CenterOnSmallScreen>
            </Styled.Module>
            <Styled.Module>
              <Styled.ModuleTitle>
                {lang.hotCategories}
                <Link href="https://asktug.com/">{viewAllLang}</Link>
              </Styled.ModuleTitle>
              <Categories categories={lang.categories} />
            </Styled.Module>
          </>
        }
      />
    </Styled.Container>
  );
};

export default Forum;
