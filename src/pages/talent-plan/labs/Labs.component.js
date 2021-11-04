import React from 'react';
import { Col, Image, Row } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

import * as Styled from './labs.styled';
import { Styled as CommonStyled } from '@tidb-community/ui';
import { common as commonUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';
import { useTranslation } from 'next-i18next';
import { LabCardImgWrapper } from './labs.styled';

const Labs = () => {
  const router = useRouter();

  const { isSmallScreen, breakpoint } = useIsSmallScreen();
  const { t } = useTranslation('page-talent-plan');

  const lang = t('labs', { returnObjects: true });

  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title>{lang.title}</CommonStyled.Title>
        <Row gutter={16}>
          {lang.orgs.map((org, index) => (
            <Col lg={8} md={12} xs={24} key={org.name}>
              <Styled.LabCard>
                <Row gutter={4}>
                  <Styled.LabCardImgWrapper span={12}>
                    <Image src={org.img}> </Image>
                  </Styled.LabCardImgWrapper>
                  <Col span={12}>
                    <Styled.LabCardTitle> {org.name} </Styled.LabCardTitle>
                  </Col>
                </Row>
              </Styled.LabCard>
            </Col>
          ))}
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Labs;
