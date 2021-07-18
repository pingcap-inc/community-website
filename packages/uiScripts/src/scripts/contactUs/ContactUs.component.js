import React from 'react';
import useSWR from 'swr';
import { createAppGlobalStyle, constants } from '@tidb-community/ui';

import * as Styled from './contactUs.styled';
import Icon from './icon.svg';

const GlobalStyle = createAppGlobalStyle();

const ContactUs = () => {
  const { data } = useSWR('contactUs.qualifications');
  console.log('contact us data!!', data);

  return (
    <>
      <GlobalStyle />
      <Styled.Container className={constants.appClassName}>
        <Icon />
      </Styled.Container>
    </>
  );
};

export default ContactUs;
