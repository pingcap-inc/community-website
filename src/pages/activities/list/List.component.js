import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './list.styled';
import { useIsSmallScreen } from '~/hooks';

const List = () => {
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-activities');

  const lang = t('list', { returnObjects: true });

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <Styled.Title>{lang.title}</Styled.Title>
    </Styled.Container>
  );
};

export default List;
