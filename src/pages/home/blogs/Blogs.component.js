import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './blogs.styled';

const Blogs = () => {
  const { t } = useTranslation('page-home');

  const lang = t('blogs', { returnObjects: true });

  return <Styled.Container>{lang.title}</Styled.Container>;
};

export default Blogs;
