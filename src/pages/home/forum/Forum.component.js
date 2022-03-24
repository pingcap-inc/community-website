import React, { useContext } from 'react';
import { Button } from 'antd';
import { EditFilled } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';

import * as Styled from './forum.styled';
import Categories from './categories';
import Post from './post';
import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { PageDataContext } from '~/context';
import { useIsSmallScreen } from '~/hooks';
import Anchor from '~/components/Anchor';

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
                  ...post,
                  isSmallScreen,
                };

                return <Post {...props} />;
              })}
            </Styled.Posts>
            <Anchor href="https://asktug.com/">{viewAllLang}</Anchor>
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
                <Styled.Link href={lang.doc.link}>{lang.doc.text}</Styled.Link>
              </p>
              <Styled.CenterOnSmallScreen isSmallScreen={isSmallScreen}>
                <Anchor href="https://asktug.com/new-topic">
                  <Button {...writePostButtonProps} />
                </Anchor>
              </Styled.CenterOnSmallScreen>
            </Styled.Module>
            <Styled.Module>
              <Styled.ModuleTitle>
                {lang.hotCategories}
                <Styled.Link href="https://asktug.com/">{viewAllLang}</Styled.Link>
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
