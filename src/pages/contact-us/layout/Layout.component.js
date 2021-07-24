import * as R from 'ramda';
import Link from 'next/link';
import React, { useContext } from 'react';
import useSWR from 'swr';
import { Skeleton } from 'antd';
import { Trans, useTranslation } from 'next-i18next';

import * as Styled from './layout.styled';
import Icon from './icon.svg';
import { AuthContext } from '~/context';

const Layout = ({ title, subtitle, children }) => {
  const { t } = useTranslation('page-contact-us', 'common');
  const { login, isAnonymous } = useContext(AuthContext);
  const { data: resp } = useSWR('contactUs.qualifications');

  const lang = t('script', {
    returnObjects: true,
  });

  if (isAnonymous) {
    login();
    return null;
  }

  let main = (
    <Styled.Main>
      <Styled.Header>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </Styled.Header>
      {children}
    </Styled.Main>
  );

  if (!resp) {
    main = (
      <Styled.ErrorContainer>
        <Skeleton />
      </Styled.ErrorContainer>
    );
  }

  const data = resp?.data || {};
  const isAnyDetectionFalse = R.any(R.equals(R.__, false))(R.values(data));

  const Prerequisite = () => (
    <>
      {[
        data.company_info_is_completed === false && <Link href={'/my/company'}>{lang.completeCompanyInfo}</Link>,
        data.phone_email_is_completed === false && <Link href={'/my/settings'}>{lang.completeContactInfo}</Link>,
      ].filter(Boolean)}
    </>
  );

  if (isAnyDetectionFalse) {
    main = (
      <Styled.ErrorContainer>
        <Icon />
        <p>
          <Trans
            t={t}
            i18nKey="script.noPermission"
            components={{
              prerequisite: <Prerequisite />,
            }}
          />
        </p>
      </Styled.ErrorContainer>
    );
  }

  return (
    <Styled.Container>
      {main}
      <Styled.Footer>
        <span>&copy;</span>
        {t('common:footer.copyright')}
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Layout;
