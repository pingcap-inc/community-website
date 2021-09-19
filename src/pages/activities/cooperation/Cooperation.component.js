import React from 'react';

import * as Styled from './cooperation.styled';
import { useIsSmallScreen } from '~/hooks';

const Cooperation = () => {
  const { isSmallScreen } = useIsSmallScreen();

  return (
    <Styled.Container>
      <Styled.TwoColumns isSmallScreen={isSmallScreen} leftPanel={<>Left Panel</>} rightPanel={<>Right Panel</>} />
    </Styled.Container>
  );
};

export default Cooperation;
