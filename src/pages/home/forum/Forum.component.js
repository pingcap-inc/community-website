import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './forum.styled';
import * as mock from './forum.mock';
import Post from './post';
import { Link } from '~/components';
import { link as linkUtils } from '~/utils';
import { useIsSmallScreen } from '~/pages/home/index.hooks';

const Forum = () => {
  const router = useRouter();
  const { t } = useTranslation('page-home', 'common');
  const { isSmallScreen } = useIsSmallScreen();

  const lang = t('forum', { returnObjects: true });

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <Styled.Content>
        <Styled.Title>{lang.title}</Styled.Title>
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
      </Styled.Content>
    </Styled.Container>
  );
};

export default Forum;
