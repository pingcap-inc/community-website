import React from 'react';
import { Row } from 'antd';

import * as Styled from './organizers.styled';
import { useTranslation } from 'next-i18next';
import { getImage } from '~/pages/talent-plan/talent-plan.utils';
import { Styled as CommonStyled } from '@tidb-community/ui';

const Others = () => {
  const { t } = useTranslation('page-talent-plan');

  const lang = t('organizers', { returnObjects: true });

  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title>{lang.title}</CommonStyled.Title>
        <Row gutter={16}>
          {[1, 2, 3, 4].map((idx) => (
            <Styled.ImageContainer md={6}>
              <Styled.LogoImage preview={false} height="48px" src={getImage(`organizers-logo-${idx}.png`)} />
            </Styled.ImageContainer>
          ))}
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Others;
