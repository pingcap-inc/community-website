import * as yup from 'yup';
import React, { useState } from 'react';
import { message } from 'antd';
import { api } from '@tidb-community/datasource';
import { useTranslation } from 'next-i18next';

import * as Styled from './subscription.styled';
import { link as linkUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';
import { useRouter } from 'next/router';

const schema = yup.object().shape({
  email: yup.string().email(),
});

const Subscription = () => {
  const router = useRouter();
  const { isSmallScreen } = useIsSmallScreen();

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };
  const [email, setEmail] = useState('');
  const { t } = useTranslation('page-home');

  const lang = t('subscription', { returnObjects: true });
  const { emailInput: emailInputLang, joinButton: joinButtonLang, links: linksLang, terms: termsLang } = lang;

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
    <Styled.Container>
      <Styled.TwoColumns
        isSmallScreen={isSmallScreen}
        leftPanel={
          <>
            <Styled.Slogan>
              {lang.slogan}, {linksLang.see}
              <Styled.Link href={linksLang.contributorList.url}>{linksLang.contributorList.label}</Styled.Link>
            </Styled.Slogan>
            <Styled.ActionButton type="primary" onClick={onClick(joinButtonLang.link)}>
              {joinButtonLang.label}
            </Styled.ActionButton>
          </>
        }
        rightPanel={
          <>
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
          </>
        }
      />
    </Styled.Container>
  );
};

export default Subscription;
