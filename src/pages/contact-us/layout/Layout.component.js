import * as R from 'ramda';
import React, { useContext } from 'react';
import useSWR from 'swr';
import { AuthContext } from '~/context';

import * as Styled from './layout.styled';
import Icon from './icon.svg';

const Layout = ({ title, subtitle, children }) => {
  const { login, isAnonymous } = useContext(AuthContext);
  const { data: resp } = useSWR('contactUs.qualifications');

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

  const data = resp?.data || {};
  const isAnyDetectionFalse = R.any(R.equals(R.__, false))(R.values(data));

  if (isAnyDetectionFalse) {
    main = (
      <Styled.ErrorContainer>
        <Icon />
        <p>联系社区专家前，请先，以便更好地处理您地问题</p>
      </Styled.ErrorContainer>
    );
  }

  return (
    <Styled.Container>
      {main}
      <Styled.Footer>
        <span>&copy;</span>2021 TiDB Community.
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Layout;
