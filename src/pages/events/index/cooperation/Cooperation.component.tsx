import React from 'react';
import Link from 'next/link';

import * as Styled from './cooperation.styled';
import { useIsSmallScreen } from '~/hooks';
import constant from '../constant.json';

export default function Cooperation() {
  const { isSmallScreen } = useIsSmallScreen();

  return (
    <Styled.Container>
      <Styled.TwoColumns
        $isSmallScreen={isSmallScreen}
        leftPanel={
          <Styled.LeftPanel>
            <p>{constant.cooperation.desc}</p>
            <Link href={constant.cooperation.button.link} passHref>
              <Styled.ActionButton>{constant.cooperation.button.label}</Styled.ActionButton>
            </Link>
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
}
