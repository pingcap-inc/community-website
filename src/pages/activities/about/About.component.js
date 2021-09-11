import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './about.styled';

const About = () => {
  const { t } = useTranslation('page-activities');

  const lang = t('about', { returnObjects: true });

  return (
    <Styled.Container>
      <Styled.Content>{lang.title}</Styled.Content>
    </Styled.Container>
  );
};

export default About;
