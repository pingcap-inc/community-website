import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './subscription.styled';

const Subscription = () => {
  const { t } = useTranslation('page-home');

  const lang = t('subscription', { returnObjects: true });

  return <Styled.Container>{lang.title}</Styled.Container>;
};

export default Subscription;
