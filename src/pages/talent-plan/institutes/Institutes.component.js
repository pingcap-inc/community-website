import React from 'react';
import { useRouter } from 'next/router';

import * as Styled from './institutes.styled';
import { useIsSmallScreen } from '~/hooks';
import { useTranslation } from 'next-i18next';
import { Styled as CommonStyled } from '@tidb-community/ui';
import { Col, Row } from 'antd';

const Institutes = () => {
  const router = useRouter();

  const { isSmallScreen, breakpoint } = useIsSmallScreen();
  const { t } = useTranslation('page-talent-plan');

  const lang = t('institutes', { returnObjects: true });

  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title>{lang.title}</CommonStyled.Title>
        <Row gutter={16}>
          <Col span={8}>
            <Styled.ListCard>
              {lang.names.map((name) => (
                <Styled.ListItem key={name}> {name} </Styled.ListItem>
              ))}
            </Styled.ListCard>
          </Col>
          <Col span={8}>
            <Styled.ListCard>
              {lang.names.map((name) => (
                <Styled.ListItem key={name}> {name} </Styled.ListItem>
              ))}
            </Styled.ListCard>
          </Col>
          <Col span={8}>
            <Styled.ListCard>
              {lang.names.map((name) => (
                <Styled.ListItem key={name}> {name} </Styled.ListItem>
              ))}
            </Styled.ListCard>
          </Col>
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Institutes;
