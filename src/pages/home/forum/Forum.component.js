import React from 'react';
import { Button } from 'antd';
import { EditFilled } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './forum.styled';
import * as mock from './forum.mock';
import Categories from './categories';
import Post from './post';
import TwoColumnsLayout from '~/pages/home/twoColumsLayout';
import { Link } from '~/components';
import { link as linkUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';

const Forum = () => {
  const router = useRouter();
  const { t } = useTranslation('page-home', 'common');
  const { isSmallScreen } = useIsSmallScreen();

  const lang = t('forum', { returnObjects: true });

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
        title={lang.title}
        leftPanel={
          <>
            <Styled.Posts>
              {mock.posts.map((post, idx) => {
                const props = {
                  key: idx,
                  lang,
                  onClick,
                  ...post,
                };

                return <Post {...props} />;
              })}
            </Styled.Posts>
            <Link href="https://asktug.com/">{t('common:viewAll')}</Link>
          </>
        }
        rightPanel={
          <>
            <Styled.Module>
              <Styled.ModuleTitle>{lang.postQuestion}</Styled.ModuleTitle>
              <p>
                <Styled.AsktugLogo />
                {lang.whatIsAskTug}
              </p>
              <p>
                {lang.comply}
                <Link href={lang.doc.link}>{lang.doc.text}</Link>
              </p>
              <Button {...writePostButtonProps} />
            </Styled.Module>
            <Styled.Module>
              <Styled.ModuleTitle>
                {lang.hotCategories}
                <Link href="https://asktug.com/">{t('common:viewAll')}</Link>
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
