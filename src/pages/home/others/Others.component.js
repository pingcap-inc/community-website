import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './others.styled';

const Others = () => {
  const { t } = useTranslation('page-home');

  const lang = t('others', { returnObjects: true });

  return <Styled.Container>{lang.title}</Styled.Container>;
};

export default Others;
