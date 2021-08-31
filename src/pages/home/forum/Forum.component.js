import React, { useContext } from 'react';
import { Button } from 'antd';
import { EditFilled } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './forum.styled';
import Categories from './categories';
import Post from './post';
import TwoColumnsLayout from '~/pages/home/twoColumsLayout';
import { CenterOnSmallScreen } from '~/pages/home/index.styled';
import { Link } from '~/components';
import { PageDataContext } from '~/context';
import { link as linkUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';

const Forum = () => {
  const router = useRouter();
  const { data } = useContext(PageDataContext);
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-home', 'common');

  const lang = t('forum', { returnObjects: true });
  const viewAllLang = t('common:viewAll');

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  const writePostButtonProps = {
    type: 'primary',
    size: 'large',
    icon: <EditFilled />,
    children: lang.writePost,
    onClick: onClick('https://asktug.com'),
  };

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <TwoColumnsLayout
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
              <Styled.CenterableModuleTitle isSmallScreen={isSmallScreen}>
                {lang.postQuestion}
              </Styled.CenterableModuleTitle>
              <p>
                <Styled.AsktugLogo />
                {lang.intro}
              </p>
              <p>
                {lang.comply}
                <Link href={lang.doc.link}>{lang.doc.text}</Link>
              </p>
              <CenterOnSmallScreen isSmallScreen={isSmallScreen}>
                <Button {...writePostButtonProps} />
              </CenterOnSmallScreen>
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
