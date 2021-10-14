import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './cooperation.styled';
import { link as linkUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';

const Cooperation = () => {
  const router = useRouter();
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-events');

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  const lang = t('cooperation', { returnObjects: true });
  const { button: buttonLang } = lang;

  return (
    <Styled.Container>
      <Styled.TwoColumns
        isSmallScreen={isSmallScreen}
        leftPanel={
          <Styled.LeftPanel>
            <p>{lang.desc}</p>
            <Styled.ActionButton onClick={onClick(buttonLang.link)}>{buttonLang.label}</Styled.ActionButton>
          </Styled.LeftPanel>
        }
        rightPanel={
          <Styled.RightPanel>
            <Styled.Logo />
          </Styled.RightPanel>
        }
      />
    </Styled.Container>
  );
};

export default Cooperation;
