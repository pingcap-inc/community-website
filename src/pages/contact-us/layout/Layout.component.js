import * as R from 'ramda';
import React, { useContext } from 'react';
import useSWR from 'swr';
import { AuthContext } from '~/context';

import * as Styled from './layout.styled';

const Layout = ({ title, subtitle, children }) => {
  const { login, isAnonymous } = useContext(AuthContext);
  const { data: resp } = useSWR('contactUs.qualifications');

  if (isAnonymous) {
    login();
    return null;
  }

  let mainContent = (
    <>
      <Styled.Header>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </Styled.Header>
      {children}
    </>
  );

  const data = resp?.data || {};
  const isAnyDetectionFalse = R.any(R.equals(R.__, false))(R.values(data));

  if (isAnyDetectionFalse) {
    mainContent = <Styled.ErrorContainer>Error</Styled.ErrorContainer>;
  }

  return (
    <Styled.Container>
      <Styled.Main>{mainContent}</Styled.Main>
      <Styled.Footer>
        <span>&copy;</span>2021 TiDB Community.
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Layout;
