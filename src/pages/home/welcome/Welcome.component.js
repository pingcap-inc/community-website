import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './welcome.styled';

const Welcome = () => {
  const { t } = useTranslation('page-home');

  const lang = t('welcome', { returnObjects: true });

  return <Styled.Container>{lang.title}</Styled.Container>;
};

export default Welcome;
