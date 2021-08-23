import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './subscription.styled';
import { SloganBox } from './subscription.styled';

import { Col, Grid, Row, message } from 'antd';
import * as yup from 'yup';
import { api } from '@tidb-community/datasource';

const { useBreakpoint } = Grid;

const Subscription = () => {
  const { t } = useTranslation('page-home');

  const lang = t('subscription', { returnObjects: true });
  const bp = useBreakpoint();

  const [email, setEmail] = useState('');

  // email validation schema
  const schema = yup.object().shape({
    email: yup.string().email(),
  });

  // validate and subscribe
  const subscribeEmail = () => {
    schema.isValid({ email }).then(async (valid) => {
      if (valid) {
        try {
          await api.subscribe.addEmail(email);
          message.success(lang.emailInput.successMsg);
        } catch (e) {
          // when API call returns an error
          message.error(lang.emailInput.errorMsg);
        }
      } else {
        // when yup validation fails
        message.error(lang.emailInput.invalidMsg);
      }
    });
  };

  return (
    <Styled.SubscriptionSection>
      <Styled.Container isMobile={!bp.lg}>
        <Row>
          <Col xs={24} lg={16}>
            <Row justify={!bp.lg && 'center'}>
              <SloganBox>
                <Styled.Slogan>
                  {lang.slogan}, {lang.links.see}
                  <Styled.Link href={lang.links.orgArch.url}>{lang.links.orgArch.label}</Styled.Link>
                  {lang.links.connective}
                  <Styled.Link href={lang.links.contributorList.url}>{lang.links.contributorList.label}</Styled.Link>
                </Styled.Slogan>
              </SloganBox>
            </Row>
            <Row justify={!bp.lg && 'center'}>
              <Styled.JoinButton type="primary" isMobile={!bp.lg}>
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
              onChange={(evt) => setEmail(evt.target.value)}
              size="large"
              onSearch={subscribeEmail}
            />
            <Styled.TermCaption>{lang.termsDesc}</Styled.TermCaption>
          </Col>
        </Row>
      </Styled.Container>
    </Styled.SubscriptionSection>
  );
};

export default Subscription;
