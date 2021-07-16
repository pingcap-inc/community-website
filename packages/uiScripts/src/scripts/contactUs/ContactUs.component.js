import React from 'react';
import { createAppGlobalStyle, constants } from '@tidb-community/ui';

import * as Styled from './contactUs.styled';

const GlobalStyle = createAppGlobalStyle();

const ContactUs = () => (
  <>
    <GlobalStyle />
    <Styled.Container className={constants.appClassName}>Contact Us</Styled.Container>
  </>
);
export default ContactUs;
