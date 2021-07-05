import React from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';

import * as Styled from './banner.styled';
import { link as linkUtils } from '~/utils';

const Banner = ({ t }) => {
  const router = useRouter();
  const onLinkClick = R.curry(linkUtils.handleRedirect)(router);

  return (
    <Styled.Container>
      <Styled.Content>
        <h2>{t('title')}</h2>
        {t('descriptions', { returnObjects: true }).map((content, index) => (
          <p key={index}>{content}</p>
        ))}
        <Styled.Button type="primary" size="lg" onClick={() => onLinkClick(t('action-btn.link'))}>
          {t('action-btn.title')}
        </Styled.Button>
      </Styled.Content>
      <img src="/images/account/organization-badge.png" alt="org badge" width="321px" height="299px" />
    </Styled.Container>
  );
};

export default Banner;
