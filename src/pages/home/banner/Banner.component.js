import React from 'react';
import { Row } from 'antd';
import { useTranslation } from 'next-i18next';

import * as Styled from './banner.styled';

const Banner = () => {
  const { t } = useTranslation('page-home');

  const lang = t('banner', { returnObjects: true });

  return (
    <Styled.Container>
      <Styled.Content>
        <Row gutter={32} justify="space-between" align="middle">
          <Styled.LeftPanel>
            <Styled.Logo />
            <Styled.Intro>{lang.intro}</Styled.Intro>
          </Styled.LeftPanel>
          <Styled.RightPanel>Image</Styled.RightPanel>
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Banner;
