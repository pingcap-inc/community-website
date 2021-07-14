import React from 'react';

import * as Styled from './layout.styled';

const Layout = ({ children }) => {
  return (
    <Styled.Container>
      <Styled.Main>{children}</Styled.Main>
      <Styled.Footer>
        <span>&copy;</span>2021 TiDB Community.
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Layout;
