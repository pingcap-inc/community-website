import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './banner.styled';

const Banner = () => {
  const { t } = useTranslation('page-home');

  const lang = t('banner', { returnObjects: true });

  return <Styled.Container>{lang.title}</Styled.Container>;
};

export default Banner;
