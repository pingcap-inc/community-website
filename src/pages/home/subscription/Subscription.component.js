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
  const { emailInput: emailInputLang, joinButton: joinButtonLang, links: linksLang, terms: termsLang } = lang;

  // any viewport smaller than large is consider small;
  // specific UI layout consideration
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
          message.error(e.response.data.detail);
        }
      } else {
        // when yup validation fails
        message.error(emailInputLang.invalidMsg);
      }
    });
  };

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <Styled.Content>
        <Row>
          <Styled.LeftPanel xs={24} lg={16}>
            <Row justify={isSmallScreen ? 'center' : undefined}>
              <Styled.SloganBox>
                <Styled.Slogan>
                  {lang.slogan}, {linksLang.see}
                  <Styled.Link href={linksLang.contributorList.url}>{linksLang.contributorList.label}</Styled.Link>
                </Styled.Slogan>
              </Styled.SloganBox>
            </Row>
            <Row justify={isSmallScreen ? 'center' : undefined}>
              <Styled.ActionButton type="primary" onClick={onClick(joinButtonLang.link)}>
                {joinButtonLang.label}
              </Styled.ActionButton>
            </Row>
          </Styled.LeftPanel>
          <Col xs={24} lg={8}>
            <Styled.Slogan>{lang.subscribe}</Styled.Slogan>
            <Styled.EmailInput
              placeholder={emailInputLang.placeHolder}
              enterButton={emailInputLang.submit}
              onChange={(e) => setEmail(e.target.value)}
              onSearch={subscribeEmail}
            />
            <Styled.TermCaption>
              {lang.termsDesc}
              <Styled.Link href={termsLang.link}>{termsLang.label}</Styled.Link>
            </Styled.TermCaption>
          </Col>
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Subscription;
