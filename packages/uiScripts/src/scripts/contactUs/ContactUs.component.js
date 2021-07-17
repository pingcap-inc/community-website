import React from 'react';
import { createAppGlobalStyle, constants } from '@tidb-community/ui';

import * as Styled from './contactUs.styled';
import Icon from './icon.svg';

const GlobalStyle = createAppGlobalStyle();

const ContactUs = () => (
  <>
    <GlobalStyle />
    <Styled.Container className={constants.appClassName}>
      <Icon />
    </Styled.Container>
  </>
);
export default ContactUs;
