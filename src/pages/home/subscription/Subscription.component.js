import * as yup from 'yup';
import React, { useState } from 'react';
import { api } from '@tidb-community/datasource';
import { message } from 'antd';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './subscription.styled';
import { link as linkUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';

const schema = yup.object().shape({
  email: yup.string().email(),
});

const Subscription = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-home');

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  const lang = t('subscription', { returnObjects: true });
  const {
    contributorList: contributorListLang,
    emailInput: emailInputLang,
    joinButton: joinButtonLang,
    terms: termsLang,
  } = lang;

  // validate and subscribe
  const subscribeEmail = () => {
    schema.isValid({ email }).then(async (valid) => {
      if (!legalConfirmation) {
        message.warn(emailInputLang.legalMsg);
      } else if (valid) {
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

  const checkLegal = () => setLegalConfirmation(!legalConfirmation);

  const [legalConfirmation, setLegalConfirmation] = useState(false);

  return (
    <Styled.Container>
      <Styled.TwoColumns
        isSmallScreen={isSmallScreen}
        leftPanel={
          <>
            <Styled.Slogan>
              {lang.slogan}
              <Styled.Link href={contributorListLang.link}>{contributorListLang.label}</Styled.Link>
            </Styled.Slogan>
            <Styled.ActionButton onClick={onClick(joinButtonLang.link)}>{joinButtonLang.label}</Styled.ActionButton>
          </>
        }
        rightPanel={
          <>
            <Styled.Slogan>{lang.subscribe}</Styled.Slogan>
            <Styled.EmailInput
              $submitDisabled={!legalConfirmation}
              enterButton={emailInputLang.submit}
              onChange={(e) => setEmail(e.target.value)}
              onSubmit={subscribeEmail}
              placeholder={emailInputLang.placeHolder}
            />
            <Styled.TermCaption>
              <Styled.LegalCheckbox checked={legalConfirmation} onChange={checkLegal} />
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
