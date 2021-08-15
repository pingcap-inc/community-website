import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './contribution.styled';

const Contribution = () => {
  const { t } = useTranslation('page-home');

  const lang = t('contribution', { returnObjects: true });

  return <Styled.Container>{lang.title}</Styled.Container>;
};

export default Contribution;
