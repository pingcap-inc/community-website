import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './forum.styled';

const Forum = () => {
  const { t } = useTranslation('page-home');

  const lang = t('forum', { returnObjects: true });

  return <Styled.Container>{lang.title}</Styled.Container>;
};

export default Forum;
