import React from 'react';

import * as Styled from './banner.styled';

const Banner = ({ t }) => {
  return (
    <Styled.Container>
      <Styled.Content>
        <h2>{t('title')}</h2>
        {t('descriptions', { returnObjects: true }).map((content, index) => (
          <p key={index}>{content}</p>
        ))}
        <Styled.Button type="primary" size="lg">
          {t('action-btn-title')}
        </Styled.Button>
      </Styled.Content>
      <img src="/images/account/organization-badge.png" alt="org badge" width="321px" height="299px" />
    </Styled.Container>
  );
};

export default Banner;
