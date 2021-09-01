import * as yup from 'yup';
import React, { useState } from 'react';
import { Col, Grid, message, Row } from 'antd';
import { api } from '@tidb-community/datasource';
import { useTranslation } from 'next-i18next';

import * as Styled from './subscription.styled';
import { useRouter } from 'next/router';
import { link as linkUtils } from '~/utils';

const { useBreakpoint } = Grid;

const schema = yup.object().shape({
  email: yup.string().email(),
});

const Subscription = () => {
  const router = useRouter();
  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };
  const bp = useBreakpoint();
  const [email, setEmail] = useState('');
  const { t } = useTranslation('page-home');

  const lang = t('subscription', { returnObjects: true });
  const { links: linksLang, emailInput: emailInputLang } = lang;

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
            <Row justify={isSmallScreen ? 'center' : undefined}>
              <Styled.SloganBox>
                <Styled.Slogan>
                  {lang.slogan}, {linksLang.see}
                  <Styled.Link href={linksLang.contributorList.url}>{linksLang.contributorList.label}</Styled.Link>
                </Styled.Slogan>
              </Styled.SloganBox>
            </Row>
            <Row justify={isSmallScreen ? 'center' : undefined}>
              <Styled.JoinButton
                type="primary"
                isSmallScreen={isSmallScreen}
                onClick={onClick('https://accounts.pingcap.com/')}
              >
                {lang.joinButton.label}
              </Styled.JoinButton>
            </Row>
          </Col>
          <Col xs={24} lg={8}>
            <Styled.Slogan>{lang.subscribe}</Styled.Slogan>
            <Styled.EmailInput
              placeholder={emailInputLang.placeHolder}
              allowClear
              enterButton={emailInputLang.submit}
              onChange={(evt) => setEmail(evt.target.value)}
              size="large"
              onSearch={subscribeEmail}
            />
            <Styled.TermCaption>
              {lang.termsDesc} <Styled.Link href={lang.terms.link}> {lang.terms.label} </Styled.Link>
            </Styled.TermCaption>
          </Col>
        </Row>
      </Styled.Container>
    </Styled.SubscriptionSection>
  );
};

export default Subscription;
