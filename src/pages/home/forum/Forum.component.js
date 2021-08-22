import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './forum.styled';
import * as mock from './forum.mock';
import Post from './post';
import { useIsSmallScreen } from '~/pages/home/index.hooks';

const Forum = () => {
  const { t } = useTranslation('page-home');
  const { isSmallScreen } = useIsSmallScreen();

  const lang = t('forum', { returnObjects: true });

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <Styled.Content>
        <Styled.Title>{lang.title}</Styled.Title>
        {mock.posts.map((post, idx) => (
          <Post key={idx} {...post} />
        ))}
      </Styled.Content>
    </Styled.Container>
  );
};

export default Forum;
