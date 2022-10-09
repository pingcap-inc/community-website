import React from 'react';
import Link from 'next/link';

import { useIsSmallScreen } from '~/hooks';

import * as Styled from './cooperation.styled';

export default function Cooperation() {
  const { isSmallScreen } = useIsSmallScreen();

  return (
    <Styled.Container>
      <Styled.TwoColumns
        $isSmallScreen={isSmallScreen}
        leftPanel={
          <Styled.LeftPanel>
            <p>
              TiDB 社区致力于新技术新思想的发展与传播，如果你正在组织一场 TiDB 相关的活动，欢迎联系我们提供合作与支持。
            </p>
            <Link href={'/contact-us/cooperation'} passHref>
              <Styled.ActionButton>活动合作</Styled.ActionButton>
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
