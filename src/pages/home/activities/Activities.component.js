import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './activities.styled';

const Activities = () => {
  const { t } = useTranslation('page-home');

  const lang = t('activities', { returnObjects: true });

  return <Styled.Container>{lang.title}</Styled.Container>;
};

export default Activities;
