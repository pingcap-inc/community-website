import React from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './subscription.styled';
import { Row, Col, Grid } from 'antd';
import { SloganBox } from './subscription.styled';

const { useBreakpoint } = Grid;

const Subscription = () => {
  const { t } = useTranslation('page-home');

  const lang = t('subscription', { returnObjects: true });
  const bp = useBreakpoint();

  return (
    <Styled.SubscriptionSection>
      <Styled.Container isMobile={!bp.lg}>
        <Row>
          <Col xs={24} lg={16}>
            <Row justify={!bp.lg && 'center'}>
              <SloganBox>
                <Styled.Slogan>
                  {lang.slogan}, {lang.see}
                  <Styled.Underline href={lang.links.orgArch.url}> {lang.links.orgArch.label} </Styled.Underline>{' '}
                  {lang.links.connective}
                  <Styled.Underline href={lang.links.contributorList.url}>
                    {lang.links.contributorList.label}
                  </Styled.Underline>
                </Styled.Slogan>
              </SloganBox>
            </Row>
            <Row justify={!bp.lg && 'center'}>
              <Styled.JoinButton type="primary" isMobile={!bp.lg}>
                {' '}
                {lang.joinButton.label}
              </Styled.JoinButton>
            </Row>
          </Col>
          <Col xs={24} lg={8} justify>
            <Styled.Slogan>{lang.subscribe}</Styled.Slogan>
            <Styled.EmailInput
              placeholder={lang.emailInput.placeHolder}
              allowClear
              enterButton={lang.emailInput.submit}
              size="large"
              onSearch={() => {}}
            />
            <Styled.TermCaption>{lang.termsDesc}</Styled.TermCaption>
          </Col>
        </Row>
      </Styled.Container>
    </Styled.SubscriptionSection>
  );
};

export default Subscription;
