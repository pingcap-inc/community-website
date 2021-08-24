import * as yup from 'yup';
import React, { useState } from 'react';
import { Col, Grid, Row, message } from 'antd';
import { useTranslation } from 'next-i18next';

import * as Styled from './subscription.styled';
import { api } from '@tidb-community/datasource';

const { useBreakpoint } = Grid;

const schema = yup.object().shape({
  email: yup.string().email(),
});

const Subscription = () => {
  const { t } = useTranslation('page-home');
  const bp = useBreakpoint();

  const lang = t('subscription', { returnObjects: true });
  const { links: linksLang, emailInput: emailInputLang } = lang;

  const [email, setEmail] = useState('');

  // any viewport smaller than large is consider small; specific UI layout
  // consideration
  const isSmallScreen = !bp.lg;

  // validate and subscribe
  const subscribeEmail = () => {
    schema.isValid({ email }).then(async (valid) => {
      if (valid) {
        try {
          await api.subscribe.addEmail(email);
          message.success(emailInputLang.successMsg);
        } catch (e) {
          // when API call returns an error
          message.error(emailInputLang.errorMsg);
        }
      } else {
        // when yup validation fails
        message.error(emailInputLang.invalidMsg);
      }
    });
  };

  return (
    <Styled.SubscriptionSection>
      <Styled.Container isSmallScreen={isSmallScreen}>
        <Row>
          <Col xs={24} lg={16}>
            <Row justify={isSmallScreen && 'center'}>
              <Styled.SloganBox>
                <Styled.Slogan>
                  {lang.slogan}, {linksLang.see}
                  <Styled.Link href={linksLang.orgArch.url}>{linksLang.orgArch.label}</Styled.Link>
                  {linksLang.connective}
                  <Styled.Link href={linksLang.contributorList.url}>{linksLang.contributorList.label}</Styled.Link>
                </Styled.Slogan>
              </Styled.SloganBox>
            </Row>
            <Row justify={isSmallScreen && 'center'}>
              <Styled.JoinButton type="primary" $isSmallScreen={isSmallScreen}>
                {lang.joinButton.label}
              </Styled.JoinButton>
            </Row>
          </Col>
          <Col xs={24} lg={8} justify>
            <Styled.Slogan>{lang.subscribe}</Styled.Slogan>
            <Styled.EmailInput
              placeholder={emailInputLang.placeHolder}
              allowClear
              enterButton={emailInputLang.submit}
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
