import React from 'react';
import { Row } from 'antd';
import { useTranslation } from 'next-i18next';

import * as Styled from './about.styled';
import { useIsSmallScreen } from '~/hooks';

const About = () => {
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-activities');

  const lang = t('about', { returnObjects: true });

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <Styled.Content>
        <Row gutter={[32, 32]}>
          <Styled.LeftPanel>
            <Styled.Title>{lang.title}</Styled.Title>
          </Styled.LeftPanel>
          <Styled.RightPanel>Calendar</Styled.RightPanel>
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default About;
