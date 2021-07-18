import React from 'react';

import * as Styled from './layout.styled';

const Layout = ({ title, subtitle, children }) => (
  <Styled.Container>
    <Styled.Main>
      <Styled.Header>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </Styled.Header>
      {children}
    </Styled.Main>
    <Styled.Footer>
      <span>&copy;</span>2021 TiDB Community.
    </Styled.Footer>
  </Styled.Container>
);

export default Layout;
