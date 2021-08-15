import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './learning.styled';

const Learning = () => {
  const { t } = useTranslation('page-home');

  const lang = t('learning', { returnObjects: true });

  return <Styled.Container>{lang.title}</Styled.Container>;
};

export default Learning;
