import React from 'react';
import { Col, Image, Row } from 'antd';

import * as Styled from './labs.styled';
import { Styled as CommonStyled } from '@tidb-community/ui';
import { useTranslation } from 'next-i18next';
import { cdn } from '~/utils';

const Labs = () => {
  const { t } = useTranslation('page-talent-plan');

  const lang = t('labs', { returnObjects: true });

  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title>{lang.title}</CommonStyled.Title>
        <Row gutter={16}>
          {lang.orgs.map((org) => (
            <Col lg={8} md={12} xs={24} key={org.name}>
              <Styled.LabCard>
                <Styled.Row gutter={4}>
                  <Styled.LabCardImgWrapper span={12}>
                    <Image preview={false} src={cdn.getImageUrl(org.img)} />
                  </Styled.LabCardImgWrapper>
                  <Col span={12}>
                    <Styled.LabCardTitle> {org.name} </Styled.LabCardTitle>
                  </Col>
                </Styled.Row>
              </Styled.LabCard>
            </Col>
          ))}
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Labs;
