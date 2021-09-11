import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './list.styled';

const List = () => {
  const { t } = useTranslation('page-activities');

  const lang = t('list', { returnObjects: true });

  return <Styled.Container>{lang.title}</Styled.Container>;
};

export default List;
